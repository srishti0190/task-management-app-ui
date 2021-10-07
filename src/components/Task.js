function Task({ task, onTglStatus, onDeleteTask, index }) {
    return (
      <div className="card text-left" key={task.id}>
        <div className="row">
          <div className="col-10">
            <h4>{task.description}</h4>
            <div className="task-meta">
              <img
                src="https://icongr.am/feather/calendar.svg?size=12&color=b5b5b5"
                alt="calendar"
              />
              {task.date}
            </div>
          </div>
  
          <div className="col-1 is-center">
            {task.isDone}
            <button
              className="button icon-only clear"
              id={`tgl-${index}`}
              onClick={() => onTglStatus(task)}>
              {task.isDone && "✅"}
              {!task.isDone && "⬜"}
            </button>
          </div>
          <div className="col-1 is-center">
            {task.isDone}
            <button
              type="button"
              className="button icon-only clear"
              style={{color: "red"}}
              id={`delete-${index}`}
              onClick={() => onDeleteTask(task)}>
                  ❌
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default Task;