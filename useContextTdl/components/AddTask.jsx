import { useState } from "react";
import { Button } from "./Button";
import { useRequestAddNewTask } from "../hooks/useRequestAddNewTask";

export const AddTask = ({ setTaskList }) => {
  const [newTask, setNewTask] = useState({ title: "" });
  const { addNewTask } = useRequestAddNewTask(setTaskList);

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      addNewTask(newTask);
      setNewTask({ title: "" });
    }
  };

  return (
    <div className="addTask">
      <input
        type="text"
        placeholder="Новая задача"
        value={newTask.title}
        onChange={(e) => {
          setNewTask({ title: e.target.value });
        }}
      />
      <Button onClick={handleAddTask}>Добавить</Button>
    </div>
  );
};
