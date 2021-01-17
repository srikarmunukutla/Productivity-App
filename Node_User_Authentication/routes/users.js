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
router.post("/register", (req, res) => {
  const { name, email, password, password2 } = req.body;

  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Password: " + password);
  console.log("Password2: " + password2);

  let errors = [];

  // Check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
    // req.flash("Please fill in all fields");
  }

  console.log("Step 2");
  // Check passwords match
  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
    // req.flash("Passwords do not match");
  }

  // Check pass length
  if (password.length < 6) {
    errors.push({ msg: "Password is less than 6 characters long" });
    // req.flash("Password is less than 6 characters long");
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
    console.log("Step 3");
    // Validation passed
    User.findOne({ email: email }).then((user) => {
      if (user) {
        // User exists
        res.error();
        // errors.push({ msg: "Email is already registered" });
        // res.render("register", {
        //   errors,
        //   name,
        //   email,
        //   password,
        //   password2,
        // });
      } else {
        const newUser = new User({
          name,
          email,
          password,
        });

        // Hash Password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            // Set password to hashed
            // newUser.password = hash;

            // Save User
            newUser
              .save()
              .then((user) => {
                // req.flash(
                //   "success_msg",
                //   "You are now registered and can log in!"
                // );
                // res.redirect("/users/login");
                res.send({ email: user.email });
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});

// Login Handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true,
  })(req, res, next);
});

// Logout Handle
router.get("/logout", (req, res) => {
  req.logout();
  req.flash("sucess_msg", "You are logged out");
  res.redirect("/users/login");
});

module.exports = router;
