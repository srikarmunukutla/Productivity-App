import React from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

export default class ToDoList extends React.Component {
  state = {
    day: this.props.day,
    todos: [],
    todoToShow: "all",
    toggleAllComplete: true,
  };

  addToDo = (todo) => {
    //const newToDos =[todo, ...this.state.todos];
    this.setState((state) => ({
      todos: [todo, ...this.state.todos],
    }));
  };

  toggleComplete = (id) => {
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        //update
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    }));
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow: s,
    });
  };

  handleDeleteTodo = (id) => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  removeAllTodosThatAreComplete = () => {
    this.setState((state) => ({
      todos: state.todos.filter((todo) => !todo.complete),
    }));
  };

  render() {
    let todos = [];

    if (this.state.todoToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todoToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.complete);
    } else if (this.state.todoToShow === "complete") {
      todos = this.state.todos.filter((todo) => todo.complete);
    }

    return (
      <div>
        <h1>{this.state.day}</h1>
        <ToDoForm onSubmit={this.addToDo} />
        {todos.map((todo) => (
          <ToDo
            key={todo.id}
            toggleComplete={() => this.toggleComplete(todo.id)}
            onDelete={() => this.handleDeleteTodo(todo.id)}
            todo={todo}
          />
        ))}
        <div>
          Items Left: {this.state.todos.filter((todo) => !todo.complete).length}
        </div>
        <div>
          <button onClick={() => this.updateTodoToShow("all")}>All</button>
          <button onClick={() => this.updateTodoToShow("active")}>Active</button>
          <button onClick={() => this.updateTodoToShow("complete")}>Complete</button>
        </div>
        {this.state.todos.some((todo) => todo.complete) ? (
          <div>
            <button onClick={this.removeAllTodosThatAreComplete}>
              Remove All Complete Items
            </button>
          </div>
        ) : null}
        <div>
          <button
            onClick={() =>
              this.setState((state) => ({
                todos: state.todos.map((todo) => ({
                  ...todo,
                  complete: state.toggleAllComplete,
                })),
                toggleAllComplete: !this.state.toggleAllComplete,
              }))
            }
          >
            Make All: {this.state.toggleAllComplete ? "complete" : "active"}
          </button>
        </div>
      </div>
    );
  }
}
