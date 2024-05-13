import React, { useState } from "react";

interface EditedTask {
  id: number;
  editedName: string;
  editedDescription: string;
  editedPriority: number;
}

interface TaskProps {
  id: number;
  name: string;
  description: string;
  priority: number;
  onSave: (editedTask: EditedTask) => void;
  onDelete: (taskId: number) => void;
}

function Task(task: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(task.name);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [editedPriority, setEditedPriority] = useState(task.priority);
  const [id, setEditedId] = useState(task.id);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    task.onSave({
      id,
      editedName,
      editedDescription,
      editedPriority,
    });
    setIsEditing(false);
  };

  const handleDelete = () => {
    // 调用父组件传递的 onDelete 函数来删除当前任务
    task.onDelete(id);
  };

  return (
    <div className="task">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <select
            value={editedPriority}
            onChange={(e) => setEditedPriority(Number(e.target.value))}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <div>Name: {task.name}</div>
          <div>Description: {task.description}</div>
          <div>Priority: {task.priority}</div>
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;
