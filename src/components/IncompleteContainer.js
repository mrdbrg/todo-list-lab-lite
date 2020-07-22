import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

  state = {
    searchTerm: ""
  }

  // has 2 parameters for the input name and the event listener
  handleOnChange = (name, event) => {
    this.setState({
      [name]: event.target.value
    })
  }

  // passing the object that composes the searchTerm new state
  // handleOnChange = newStateValue => {
  //   this.setState(newStateValue)
  // }

  // passing the event.target.value to set searchTerm state
  // handleOnChange = value => {
  //   this.setState({
  //     searchTerm: value
  //   })
  // }

  renderTodos = () => {
    const filteredTodos = this.props.todos.filter(todo => todo.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    return filteredTodos.map(todo => 
      <ToDoCard 
        key={todo.id} 
        id={todo.id} 
        title={todo.title} 
        completed={todo.completed} 
        updateTodo={this.props.updateTodo}
        removeTodo={this.props.removeTodo}
      />
      )
  }

  render() {
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent searchTerm={this.state.searchTerm} handleUpdateState={this.handleOnChange}/>
            {this.renderTodos()}
        </div>
    )
  }
}
