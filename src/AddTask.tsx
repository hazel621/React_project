import "./App.css";
import React, { useState } from "react";
interface Task {
  id: number;
  name: string;
  description: string;
  priority: number;
}
interface AddTaskProps {
  onAdd: (newTask: Task) => void;
}
function AddTask({ onAdd }: AddTaskProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(3);

  const handleAddTask = () => {
    // 创建新任务对象
    const newTask = {
      id: Math.floor(Math.random() * 10000), // 生成一个随机的唯一ID
      name,
      description,
      priority,
    };

    // 将新任务传递给父组件进行添加
    if (name === "") return alert("Please fill in name");
    onAdd(newTask);

    // 清空表单
    setName("");
    setDescription("");
    setPriority(3);
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
        <select
          value={priority}
          onChange={(e) => setPriority(Number(e.target.value))}
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
