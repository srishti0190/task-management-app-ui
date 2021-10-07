import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import DatePicker from "react-datepicker";

function TaskEdit({ task, onSaveTask }) {
  const [description, setDesc] = useState("");
  const [date, setDate] = useState(new Date());

  const saveTask = (e) => {
    e.preventDefault();
    onSaveTask({ description, date });

    setDesc("");
    setDate(new Date());
  };

  const handleDateChange = (date) => {
      console.log("date is in format: ", date);
    setDate(date);
  }
  return (
    <div className="card" id="tasks">
      <h3>Add Task</h3>
      <form>
        <label htmlFor="desc">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={description}
          onChange={(e) => setDesc(e.target.value)}
        />

        <label htmlFor="date">Date</label>
        <DatePicker selected={date} onChange={handleDateChange} showTimeSelect />

        <div className="text-right">
          <button id="saveBtn" className="button dark" onClick={saveTask}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskEdit;