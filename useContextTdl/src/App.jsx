import "./App.css";
import { AddTask } from "../components/AddTask";
import { TaskList } from "../components/TaskList";
import { useRequestGetTaskList } from "../hooks/useRequestGetTaskList";
import { useRequestDeleteTask } from "../hooks/useRequestDeleteTask";
import { useRequestUpdateTask } from "../hooks/useRequestUpdateTask";

function App() {
  const { taskList, setTaskList } = useRequestGetTaskList();
  const { requestDeleteTask } = useRequestDeleteTask(setTaskList);
  const deleteTaskHandler = (id) => {
    requestDeleteTask(id);
    setSearchResult((prevSearchResult) =>
      prevSearchResult.filter((task) => task.id !== id)
    );
  };
  const { updateTask } = useRequestUpdateTask(setTaskList);

  return (
    <>
      <div className="tdl">
        <h1>ToDoList</h1>
        <AddTask setTaskList={setTaskList} />
        <TaskList
          taskList={taskList}
          deleteTaskHandler={deleteTaskHandler}
          updateTask={updateTask}
        />
      </div>
    </>
  );
}

export default App;
