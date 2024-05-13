import React, { useState } from "react";
import Task from "../Task";
import AddTask from "../AddTask";

interface TaskProps {
  id: number;
  name: string;
  description: string;
  priority: number;
}
interface EditedTask {
  id: number;
  editedName: string;
  editedDescription: string;
  editedPriority: number;
}
function ListGroup() {
  const initialTasks: TaskProps[] = [
    {
      id: 1,
      name: "Example Task",
      description: "This is an example task",
      priority: 3,
    },
  ];

  const [tasks, setTasks] = useState<TaskProps[]>(initialTasks);

  const addTask = (newTask: TaskProps) => {
    setTasks([...tasks, newTask]);
  };

  const handleSaveTask = (editedTask: EditedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? { ...task, ...editedTask } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(filteredTasks);
  };

  const sortedTasks = tasks.slice().sort((a, b) => b.priority - a.priority);

  return (
    <div>
      <AddTask onAdd={addTask} />
      {sortedTasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}
          priority={task.priority}
          onSave={handleSaveTask}
          onDelete={handleDeleteTask}
        />
      ))}
    </div>
  );
}

export default ListGroup;
