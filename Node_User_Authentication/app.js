const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");
var cors = require("cors");
var bodyParser = require("body-parser");

const app = express();

require("./config/passport")(passport);

// DB Config
const db = require("./config/keys").MongoURI;

// Connect to Mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

// To deal with CORS
app.use(cors());

// Bodyparser
app.use(bodyParser.json());

// // EJS
// app.use(expressLayouts);
// app.set("view engine", "ejs");

// Bodyparser
// app.use(express.urlencoded({ extended: false }));

// Express Session Middleware
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
// app.use(flash());

// Global Vars
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });

// Routes
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/todo", require("./routes/todo"));
app.use("/login", require("./routes/login"));
console.log("After /users");
// app.get('/users/register', function (req, res) {
//   res.send('hello');
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
