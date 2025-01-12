import { useCallback } from "react";
export const useRequestAddNewTask = (setTaskList) => {
  const addNewTask = useCallback(
    (newTask) => {
      fetch("http://localhost:3000/tasklist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("network problem");
          }
          return res.json();
        })
        .then((addedTask) =>
          setTaskList((prevList) => [...prevList, addedTask])
        )
        .catch((error) => {
          console.error("Ошибка добавления", error);
        });
    },
    [setTaskList]
  );

  return { addNewTask };
};
