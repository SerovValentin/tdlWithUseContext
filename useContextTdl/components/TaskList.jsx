import { Button } from "./Button";
import { useState } from "react";
import myIcon from "../img/myIcon.svg";

export const TaskList = (props) => {
  const [searchResult, setSearchResult] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [updatedTask, setUpdatedTask] = useState({
    title: "",
  });
  const [currentTask, setCurrentTask] = useState({});

  const deleteTaskHandler = (id) => {
    props.requestDeleteTask(id);
    setSearchResult((prevSearchResult) =>
      prevSearchResult.filter((task) => task.id !== id)
    );
  };

  const updateTaskHandler = () => {
    if (updatedTask.title.trim()) {
      props.updateTask({ id: currentTask.id, ...updatedTask });
      setUpdatedTask({ title: "" });
      setIsEdit(false);
      setCurrentTask({});
    }
  };

  const handleSort = () => {
    const sortedTaskList = [...props.taskList].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    props.setTaskList(sortedTaskList);
  };

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleSearch = (e) => {
    if (e.target.value !== "") {
      setSearchResult(
        props.taskList.filter((task) => {
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
      )}
      <ul className="tlList">
        {(searchResult.length > 0 ? searchResult : props.taskList || []).map(
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
