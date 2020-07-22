import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm'
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'

export default class ToDoContainer extends Component {

  state = {
    todos: []
  }

  // fetch data
  componentDidMount() {
    fetch("http://localhost:3000/todos")
    .then(r => r.json())
    .then(todoData => {
      // implicit assignment
      this.setState({ 
        todos: todoData
       })
    })
  }

  // filter all the completed todos
  getCompleteToDos() {
    return this.state.todos.filter(todo => todo.completed)
  }

  // filter all the incomplete todos
  getIncompleteToDos() {
    return this.state.todos.filter(todo => !todo.completed)
  }

  // add todo to the beginning of the list of todos updating the UI
  addTodo = (newTodo) => {
    this.setState(prevState => ({
      todos: [newTodo, ...this.state.todos]
    }))
  }

  // update the list of todos on UI
  updateTodo = (updatedTodo) => {
    const filteredTodo = this.state.todos.map(todo => todo.id === updatedTodo.id ? updatedTodo : todo )

    this.setState(prevState => ({
      todos: filteredTodo
    }))
  }

  // delete todo from the UI using the id given onClick from the ToDoCard component 
  removeTodo = (todoId) => {
    const filteredTodo = this.state.todos.filter(todo => todo.id !== todoId)

    this.setState(prevState => ({
      todos: filteredTodo      
     }))
  }
  
  render() {
    return (
      <div id="todo-container">
        <NewToDoForm addTodo={this.addTodo}/>
        <CompletedContainer 
          todos={this.getCompleteToDos()} 
          updateTodo={this.updateTodo} 
          removeTodo={this.removeTodo} 
          />

        <IncompleteContainer 
          todos={this.getIncompleteToDos()} 
          updateTodo={this.updateTodo}  
          removeTodo={this.removeTodo}  
          />
      </div>
    );
  }
}
