import Task from "./Task";
function Tasks({ tasks, onTglStatus, onDeleteTask }) {
  return (
    <div className="card">
      <div className="row">
        {tasks.map((task, index) => (
          <div className="col-12" key={task.id}>
            <Task task={task} onTglStatus={onTglStatus} onDeleteTask={onDeleteTask} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;