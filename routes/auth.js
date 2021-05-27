const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {registerValidation, loginValidation } = require('../validation');
const verify = require('./verifyToken');



router.post('/register', async (req, res) => {
    //Validate data
    
    // const {error} = registerValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message[0]);
    
    // checking if the user already exists in database
    const emailExist = await User.findOne({email: req.body.email});
    if(emailExist) return res.status(400).send('Email already exists');

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    // Create new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        userType: req.body.userType
    });
    try {
        const savedUser = await user.save();
        res.send({user: user._id});
        res.json(savedUser);
    } catch (err) {
        res.status(400).send(err)
    }
});


router.post('/login', async (req, res) => {
    // const {error} = loginValidation(req.body);
    // if(error) return res.status(400).send(error.details[0].message[0]);

    // checking if the email exists
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is not found !');

    // checking if passwoord is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid password');

    // create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});

router.get("/", verify, async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.json({ message: error });
    }
  });
  



module.exports = router;