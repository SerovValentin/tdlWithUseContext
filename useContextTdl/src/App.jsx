import "./App.css";
import { AddTask } from "../components/AddTask";
import { TaskList } from "../components/TaskList";
import { useRequestGetTaskList } from "../hooks/useRequestGetTaskList";
import { useRequestDeleteTask } from "../hooks/useRequestDeleteTask";
import { useRequestUpdateTask } from "../hooks/useRequestUpdateTask";

function App() {
  const { taskList, setTaskList } = useRequestGetTaskList();
  const { requestDeleteTask } = useRequestDeleteTask(setTaskList);
  const {
    updateTask,
    setCurrentTask,
    setUpdatedTask,
    currentTask,
    updatedTask,
  } = useRequestUpdateTask(setTaskList);

  return (
    <>
      <div className="tdl">
        <h1>ToDoList</h1>
        <AddTask setTaskList={setTaskList} />
        <TaskList
          taskList={taskList}
          requestDeleteTask={requestDeleteTask}
          updateTask={updateTask}
          setCurrentTask={setCurrentTask}
          setUpdatedTask={setUpdatedTask}
          currentTask={currentTask}
          updatedTask={updatedTask}
        />
      </div>
    </>
  );
}

export default App;
