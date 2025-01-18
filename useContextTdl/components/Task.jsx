import { useContext } from "react";
import { Button } from "./Button";

import { UpdateContext } from "../hooks/UpdateContext";

export const Task = (props) => {
  const {
    updateTask,
    setCurrentTask,
    setUpdatedTask,
    currentTask,
    updatedTask,
  } = useContext(UpdateContext);

  const updateTaskHandler = () => {
    if (updatedTask.title.trim()) {
      updateTask({ id: currentTask.id, ...updatedTask });
      setUpdatedTask({ title: "" });
      props.setIsEdit(false);
      setCurrentTask({});
    }
  };
  return (
    <div className="editTask">
      <input
        type="text"
        value={updatedTask.title}
        onChange={(e) => setUpdatedTask({ title: e.target.value })}
      />
      <Button
        onClick={() => {
          updateTaskHandler();
        }}
      >
        Сохранить
      </Button>
    </div>
  );
};
