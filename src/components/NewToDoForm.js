import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state = {
    value: ""
  }

  // higher order function - long syntax
  // handleOnChange = name => {
  //   return event => {
  //     this.setState({
  //       [name]: event.target.value
  //     })
  //   }
  // }

  // higher order function - shorter syntax
  handleOnChange = name => event => {
    this.setState({ 
      [name]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const newToDo = {
      title: this.state.value,
      completed: false
    }

    fetch("http://localhost:3000/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newToDo)
    })
    .then(r => r.json())
    .then(newTodo => {
      this.props.addTodo(newTodo)
    })

  }

  render() {
    return (
      <div>
        <form className="ui form" onSubmit={(event) => this.handleSubmit(event)} >
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input type="text" name="practicing_higher_order_fn_1" placeholder="Title" 
                  value={this.state.value} 
                  onChange={this.handleOnChange("value")} />
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
