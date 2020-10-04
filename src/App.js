import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/header';
import About from './components/pages/About';
import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
      todos: [
        {
          id: 1,
          name: 'Say Alhamdulillah',
          finished: false
        },
        {
          id: 2,
          name: 'feed Mosh',
          finished: true
        },
        {
          id: 3,
          name: 'Master react',
          finished: false
        }
      ],
  }
  // id is coming all the way from TodoItem component
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.finished = !todo.finished;
        console.log(todo)
      }
      
      return todo;
    }) })
  }
  
  addTodo = (newItem) => {
    const newTodo = {
      id: uuid(),
      name: newItem,
      finished: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }
  
  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) })
  }

  render () {
    return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <AddTodo addTodo={this.addTodo}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
          </React.Fragment>
        )} />
  
        <Route path="/about" component={About} />
        
      </div>
    </Router>
  )}
}

export default App;
