import React from 'react';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const todoItems= [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state={
      todoList: todoItems
    };
  }

  toggleItem = id => {
    const newTodoList = this.state.todoList.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTask]
    });
  }

  clearCompleted = () => {
    console.log("This is current todoList state", this.state.todoList);
    this.setState({
      todoList: this.state.todoList.filter(item => !item.completed)
    });
    console.log("This is after the filter function runs", this.state.todoList);
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </div>
        <TodoList todoItems={this.state.todoList} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted}/>
        </div>
    );
  }
}

export default App;