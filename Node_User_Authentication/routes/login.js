const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// User model
const User = require("../models/Users");

// Login Page
// router.get("/login", (req, res) => res.render("login"));

// Register Page
// router.get("/register", (req, res) => res.render("register"));

// Register Handle
router.post("", (req, res) => {
  const { name, email, password } = req.body;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Password: " + password);

  let errors = [];

  // Check required fields
  if (!name || !email || !password ) {
    errors.push({ msg: "Please fill in all fields" });
    // req.flash("Please fill in all fields");
  }

  if (errors.length > 0) {
    console.log(errors);
    // res.render("register", {
    //   errors,
    //   name,
    //   email,
    //   password,
    //   password2,
    // });
  } else {
    // Validation passed
    User.findOne({ email: email }).then((user) => {
      if (user) {
        // User exists

        if (password != user.password) {
            res.error();
        }
        res.send({ email: user.email });
        console.log("Login successful");
        // Hash Password
        // bcrypt.genSalt(10, (err, salt) =>
        //   bcrypt.hash(newUser.password, salt, (err, hash) => {
        //     if (err) throw err;

        //     // Set password to hashed
        //     // newUser.password = hash;

        //     // Save User
        //     newUser
        //       .save()
        //       .then((user) => {
        //         // req.flash(
        //         //   "success_msg",
        //         //   "You are now registered and can log in!"
        //         // );
        //         // res.redirect("/users/login");
        //         res.send({ email: user.email });
        //       })
        //       .catch((err) => console.log(err));
        //   })
        // );
        // errors.push({ msg: "Email is already registered" });
        // res.render("register", {
        //   errors,
        //   name,
        //   email,
        //   password,
        //   password2,
        // });
      } else {
        res.error();
      }
    });
  }
});

module.exports = router;
