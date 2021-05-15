import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //   const items = [];
  //   for (const i of tasks) {
  //     items.push(<p>{i.text + ", "}</p>);
  //   }

  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
    // <h3>{items}</h3>
  );
};

export default Tasks;
