const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const User = require("../controllers/user");

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 character long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 character long')
],
    User.registerUser
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password at least min 6 length') 
],
    User.loginUser
)

module.exports = router;