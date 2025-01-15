import { Button } from "./Button";
import { useState } from "react";
import myIcon from "../img/myIcon.svg";
import { debounce } from "../utils/utils";
import { Task } from "./Task";

export const TaskList = ({
  setUpdatedTask,
  setCurrentTask,
  taskList,
  setTaskList,
  ...props
}) => {
  const [searchResult, setSearchResult] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const deleteTaskHandler = (id) => {
    props.requestDeleteTask(id);
    setSearchResult((prevSearchResult) =>
      prevSearchResult.filter((task) => task.id !== id)
    );
  };

  const handleSort = () => {
    const sortedTaskList = [...taskList].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setTaskList(sortedTaskList);
  };

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setSearchResult(
        taskList.filter((task) => {
          return task.title
            .toLowerCase()
            .includes(e.target.value.toLowerCase());
        })
      );
    } else {
      setSearchResult([]);
    }
  };

  return (
    <div className="taskList">
      <h3>Список задач</h3>
      <div className="searchForm">
        <input
          type="text"
          placeholder="Найти задачу"
          onChange={debounce(handleSearch, 500)}
        />
        <Button onClick={handleSort}>↓↑</Button>
      </div>
      {isEdit && (
        <Task
          setTaskList={setTaskList}
          setIsEdit={setIsEdit}
          setUpdatedTask={setUpdatedTask}
          setCurrentTask={setCurrentTask}
          currentTask={props.currentTask}
          updatedTask={props.updatedTask}
          updateTask={props.updateTask}
        />
      )}
      <ul className="tlList">
        {(searchResult.length > 0 ? searchResult : taskList || []).map(
          (task) => {
            return (
              <li key={task.id}>
                {task.title}
                <Button
                  onClick={() => {
                    setCurrentTask(task);
                    setIsEdit(!isEdit);
                    setUpdatedTask({ title: task.title });
                  }}
                >
                  <img src={myIcon} alt="edit" width={"15px"} height={"15px"} />
                </Button>
                <button
                  className="btn-del"
                  onClick={() => {
                    deleteTaskHandler(task.id);
                  }}
                >
                  x
                </button>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
};
