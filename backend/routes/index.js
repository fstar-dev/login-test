const express = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require("../config/dbConnection");
const router = express.Router();
const User = require('../model/User');


router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    // Get user input
    const { name, lname, email, password } = req.body;

    // Validate user input
    if (!(email && password && name && lname)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    db.query(`Insert into tbl_user (firstname, lastname, email, password) VALUES ('${name}', '${lname}', '${email}', '${encryptedPassword}')`);
    const user = {
      name: name,
      lname: lname,
      email: email,
      password: password,
    };
    const token = jwt.sign(
      { email },
      'the-super-strong-secrect',
      {
        expiresIn: "2h",
      }
    );

    console.log(token);
    // save user token
    user.token = token;
    console.log('@#@#user', user);

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});

router.post('/login', (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body.data;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    // const user = await User.findOne({ email });

    db.query(`Select * from tbl_user where email = '${email}';`, 
    (err, result) => {
      if (result[0] && (bcrypt.compare(password, result[0].password))) {
        // Create token
        const token = jwt.sign(
          { email },
          'the-super-strong-secrect',
          {
            expiresIn: "2h",
          }
        );
          const user = {
            name: result[0].name,
            lname: result[0].lname,
            email: result[0].email,
            password: result[0].password
          };
        // save user token
        user.token = token;
  
        // user
        res.status(200).json(user);
      }
      res.status(400).send("Invalid Credentials");
    });    
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;