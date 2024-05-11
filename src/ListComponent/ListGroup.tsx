import React, { useState } from "react";
import Task from "../Task";
import AddTask from "../AddTask";

interface TaskProps {
  id: number;
  name: string;
  description: string;
  priority: string;
}
interface EditedTask {
  id: number;
  editedName: string;
  editedDescription: string;
  editedPriority: string;
}
function ListGroup() {
  const initialTasks: TaskProps[] = [
    {
      id: 1,
      name: "Task 1",
      description: "Task 1 description",
      priority: "high",
    },
    {
      id: 2,
      name: "Task 2",
      description: "Task 2 description",
      priority: "medium",
    },
    {
      id: 3,
      name: "Task 3",
      description: "Task 3 description",
      priority: "low",
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
  return (
    <div>
      {tasks.map((task) => (
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
      <AddTask onAdd={addTask} />
    </div>
  );
}

export default ListGroup;
