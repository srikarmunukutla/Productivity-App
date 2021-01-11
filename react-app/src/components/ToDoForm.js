import React from 'react';
import shortid from 'shortid';
const express = require("express");
const router = express.Router();

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
        this.props.onSubmit({
            id: shortid.generate(),
            text:this.state.text,
            complete:false
        });
        this.setState({
            text: ""
        });

        router.post("/todo", (req, res) => {
            // add to MongoDB database
            // initial code was scrapped b/c didn't work
        });
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