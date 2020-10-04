import React, {Component} from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  
  getStyle = () => {
    return {
      textDecoration: this.props.todo.finished ? 'line-through' : 'none',
      backgroundColor: "#f4f4f4"
    }
  }

  render() {
    const { id, name, finished } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} checked={finished} />{name}
        <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
      </div>
    );
  }
}

const btnStyle = {
  float: "right",
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 8px",
  borderRadius: "50%",
  cursor: "pointer"
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem;