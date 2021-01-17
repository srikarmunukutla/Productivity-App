const express = require("express");
const router = express.Router();

const ToDo = require("../models/ToDo");

router.post("", (req, res) => {
    const { id, text, complete} = req.body;

    console.log("ID: " + id);
    console.log("Text: " + text);
    console.log("Complete: " + complete);

    const newToDo = new ToDo({
        id, 
        text, 
        complete
    });

    newToDo.save()
        .then((todo) => {
            res.send("Added a ToDo");
        })
        .catch((err) => console.log(err));;

});

module.exports = router;