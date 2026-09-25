import { Component } from "react";

class TaskList extends Component {
  state = {
    tasks: this.props.tasks,
  };

  handleTasksDelete = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((tasks) => tasks.id !== id),
    }));
  };

  render() {
    return (
      <ul>
        {this.state.tasks.map((tasks) => {
          return (
            <li key={tasks.id}>
              <p>{tasks.text}</p>
              <button
                onClick={() => this.handleTasksDelete(tasks.id)}
                type="button"
              >
                видалити
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TaskList;

