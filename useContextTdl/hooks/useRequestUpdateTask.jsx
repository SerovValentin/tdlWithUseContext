import { useState } from "react";
export const useRequestUpdateTask = (setTaskList) => {
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
  });
  const [currentTask, setCurrentTask] = useState({});

  const updateTask = (updatedTask) => {
    fetch(`http://localhost:3000/tasklist/${updatedTask.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Ошибка при обновлении задачи");
        }
        return res.json();
      })
      .then(() => {
        setTaskList((prevList) => {
          return prevList.map((task) =>
            task.id === updatedTask.id ? updatedTask : task
          );
        });
      })
      .catch((error) => {
        console.error("Ошибка обновления задачи:", error);
      });
  };

  return {
    updateTask,
    updatedTask,
    setUpdatedTask,
    currentTask,
    setCurrentTask,
  };
};
