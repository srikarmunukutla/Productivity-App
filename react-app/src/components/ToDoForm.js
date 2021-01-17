import React from 'react';
import shortid from 'shortid';
import axios from 'axios';
// const express = require("express");
// const router = express.Router();

export default class ToDoForm extends React.Component{
    state = {
        text: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const todo = { 
            id : shortid.generate(), 
            text : this.state.text, 
            complete: false }
        
        this.props.onSubmit({
            id: todo.id,
            text: todo.text,
            complete: todo.complete
        });
        this.setState({
            text: ""
        });

        axios.post("http://localhost:5000/todo", todo)
            .then((res) => {
                console.log(res);
                // this.props.onSubmit(todo);
                // this.setState({text: ""});
            })
            .catch((err) => {
                console.log(err);
            });
        // router.post("/todo", (req, res) => {
        //     // add to MongoDB database
        //     // initial code was scrapped b/c didn't work
        // });
    }

    render(){
        return(
            <form onSubmit = {this.handleSubmit}>
                <input 
                    name = "text"
                    value = {this.state.text} 
                    placeholder="to do..."
                    onChange = {this.handleChange}/>
                <button onClick={this.handleSubmit}>Add</button>
            </form>
        );
    }
}