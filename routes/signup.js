var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { check, validationResult } = require('express-validator/check');
const UsersModel = require('../models/usermodel');


/* GET users listing. */
router.post('/', [
  // username must be an email
  check('username').isEmail(),
  // password must be at least 6 chars long
  check('password').isLength({ min: 6 }),
  check('password').isAlphanumeric(),
  check('firstname').isAlpha(),
  check('lastname').isAlpha(),
],function(req, res, next) {
  console.log('signup');
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  bcrypt.hash(req.body.password, saltRounds).then(function(hash) {
    console.log('hash   : '+hash);
    async function asyncParallel() {
      try {
  UsersModel.save({
    user_name: req.body.username,
    password: hash,
    name: {first_name:req.body.firstname,last_name:req.body.lastname},
    phone: req.body.phone,
    update_date: new Date,
    create_date: new Date,
    user_status: true
  })
} catch(err) {
    console.log(err)
  }
}
});
});

module.exports = router;
