
import { Component } from "react";
import "./App.css";

import tasks from "./tasks.json";
import TaskList from "./component/TaskList/TaskList";

class App extends Component {
  render() {
    return <TaskList tasks={tasks} />;
  }
}

export default App;

