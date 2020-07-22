import React, { Component } from 'react';

export default class SearchBarComponent extends Component {

  // passing event.target.value to incompleteContainer component to set the new searchTerm state
  // handleOnChange = (value) => {
  //   this.props.handleUpdateState(value)
  // }

  // using higher order function to set the searchTerm new state
  // handleOnChange = name => event => {
  //   const newStateValue = {
  //     [name]: event.target.value
  //   }
  //   this.props.handleUpdateState(newStateValue)
  // }

  // using higher order function to pass the input name and the event listener
  handleOnChange = name => event => {
    this.props.handleUpdateState(name, event)
  }

  render() {
    return (
    <div className="ui input fluid"> 
        <input 
          autoComplete="off" 
          placeholder="Search Term" 
          type="text" 
          name="practicing_higher_order_fn_2" 
          value={this.props.searchTerm}
          // passing event.target.value to handleOnChange to set the new searchTerm state
          // onChange={(event) => this.handleOnChange(event.target.value)}
          onChange={this.handleOnChange("searchTerm")}
        />
    </div>
    );
  }
}
