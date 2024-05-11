import "./App.css";
import React, { useState } from "react";
interface Task {
  id: number;
  name: string;
  description: string;
  priority: string;
}
interface AddTaskProps {
  onAdd: (newTask: Task) => void;
}
function AddTask({ onAdd }: AddTaskProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleAddTask = () => {
    // 创建新任务对象
    const newTask = {
      id: Math.floor(Math.random() * 10000), // 生成一个随机的唯一ID
      name,
      description,
      priority,
    };

    // 将新任务传递给父组件进行添加
    onAdd(newTask);

    // 清空表单
    setName("");
    setDescription("");
    setPriority("medium");
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Priority:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
