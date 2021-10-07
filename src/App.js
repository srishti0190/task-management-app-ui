import "./App.css";
import "./assets/styles.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskEdit from "./components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([]);

  const REACT_APP_API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
          `${REACT_APP_API_ENDPOINT}/api/v1/tasks`,
      );
 
      setTasks(result.data);
    };
 
    fetchData();
  }, []);
 

  const onTglStatus = (task) => {
    setTasks(
      tasks.map((checkTask) => {
        checkTask.isDone =
          task.id === checkTask.id ? !checkTask.isDone : checkTask.isDone;
        return checkTask;
      })
    );
    axios.put(`${REACT_APP_API_ENDPOINT}/api/v1/tasks/${task.id}`, task);
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ description, date }) => {
    let newTask =  {description, date: formattedDate(date), isDone: false};
    axios.post(`${REACT_APP_API_ENDPOINT}/api/v1/tasks/`,  newTask)
    .then(res => {
      let receivedTask = res.data;
      if (receivedTask.id === null) {
        receivedTask.id = tasks.length + 1;
      }
      setTasks([receivedTask, ...tasks,]);
    });
  };

  const formattedDate = (dt) => {
    return `${dt.getFullYear().toString().padStart(4, '0')}-${
      (dt.getMonth()+1).toString().padStart(2, '0')}-${
        dt.getDate().toString().padStart(2, '0')} ${
        dt.getHours().toString().padStart(2, '0')}:${
        dt.getMinutes().toString().padStart(2, '0')}:${
        dt.getSeconds().toString().padStart(2, '0')}`
  }

  const onDeleteTask = (task) => {
    axios.delete(`${REACT_APP_API_ENDPOINT}/api/v1/tasks/${task.id}`).then(res => {
      setTasks(
        tasks.filter((t) => {
          return t.id !== task.id;
        })
      );
    });
  };

  return (
    <div className="App">
      <Header></Header>

      <div className="container">
        <div className="col-12 text-right">
          <button
            className="button outline"
            onClick={() => setShowTaskEdit(!showTaskEdit)}
            id="new">
            {!showTaskEdit && "New"}
            {showTaskEdit && "➖"}
          </button>
        </div>
        {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
        <Tasks tasks={tasks} onTglStatus={onTglStatus} onDeleteTask={onDeleteTask}></Tasks>
      </div>
    </div>
  );
}

export default App;