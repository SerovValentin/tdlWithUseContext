export const useRequestDeleteTask = (setTaskList) => {
  const requestDeleteTask = (id) => {
    fetch(`http://localhost:3000/tasklist/${id}`, {
      method: "DELETE",
    }).finally(() => {
      setTaskList((prevList) => prevList.filter((task) => task.id !== id));
    });
  };
  return { requestDeleteTask };
};
