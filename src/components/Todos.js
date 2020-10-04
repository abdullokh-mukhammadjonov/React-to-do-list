import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  
  render() {
    return (
      this.props.todos.map((el) => (
        <TodoItem key={el.id} todo={el} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo} />
      ))
    )
  }
}

Todos.prepTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
