import React, { Component } from 'react';

class AddTodo extends Component {
  state = {
    name: '',
  }
  onType = (e) => {
    this.setState({ name: e.target.value });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.name);
    this.setState({ name: ''});
    document.newTodo.reset(); 
  }
  
  render() {
    return (
      <form name="newTodo" onSubmit={this.onSubmit} style={{display: "flex"}}>
        <input type="text" name="title" onChange={this.onType} placeholder="add todo ..." style={{flex: "10", padding: "5px"}} value={this.state.na} />
        <input type="submit" value="Add" className="btn" style={{flex: "1"}} />
      </form>
    )
  }
}

export default AddTodo;