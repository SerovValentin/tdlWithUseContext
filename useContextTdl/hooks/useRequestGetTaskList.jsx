import { useEffect, useState } from "react";

export const useRequestGetTaskList = () => {
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/tasklist")
      .then((res) => res.json())
      .then((data) => setTaskList(data));
  }, []);
  return { taskList, setTaskList };
};
