import { Button } from "./Button";
import { useRequestUpdateTask } from "../hooks/useRequestUpdateTask";
export const Task = (props) => {
  const updateTaskHandler = () => {
    if (props.updatedTask.title.trim()) {
      props.updateTask({ id: props.currentTask.id, ...props.updatedTask });
      props.setUpdatedTask({ title: "" });
      props.setIsEdit(false);
      props.setCurrentTask({});
    }
  };
  return (
    <div className="editTask">
      <input
        type="text"
        value={props.updatedTask.title}
        onChange={(e) => props.setUpdatedTask({ title: e.target.value })}
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
