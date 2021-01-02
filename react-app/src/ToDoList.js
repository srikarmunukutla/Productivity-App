import React from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';

export default class ToDoList extends React.Component{
    
    state = {
        todos: []
    };

    addToDo = (todo) =>{
        const newToDos =[todo, ...this.state.todos];
        this.setState({
            todos: newToDos
        })
    }

    toggleComplete= (id) => {
        this.setState({
            todos:this.state.todos.map(todo => {
                //update
                if (todo.id===id){
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }else{
                    return todo;
                }
            })
        })
    }

    render(){
        return(
            <div>
                <ToDoForm onSubmit = {this.addToDo}/>
                {this.state.todos.map(todo => (
                    <ToDo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)} 
                        todo={todo}/>
                ))}
            </div>
        );
    }
}