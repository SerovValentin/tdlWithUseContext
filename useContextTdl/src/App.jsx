import "./App.css";
import { AddTask } from "../components/AddTask";
import { TaskList } from "../components/TaskList";
import { useRequestGetTaskList } from "../hooks/useRequestGetTaskList";
import { useRequestDeleteTask } from "../hooks/useRequestDeleteTask";
import { useRequestUpdateTask } from "../hooks/useRequestUpdateTask";
import { AppContextProvider } from "../hooks/app-context-provider";

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
    <AppContextProvider
      taskList={taskList}
      updateTask={updateTask}
      currentTask={currentTask}
      updatedTask={updatedTask}
      setCurrentTask={setCurrentTask}
      setUpdatedTask={setUpdatedTask}
      setTaskList={setTaskList}
    >
      <div className="tdl">
        <h1>ToDoList</h1>
        <AddTask setTaskList={setTaskList} />
        <TaskList
          taskList={taskList}
          requestDeleteTask={requestDeleteTask}
          setCurrentTask={setCurrentTask}
          setUpdatedTask={setUpdatedTask}
          setTaskList={setTaskList}
        />
      </div>
    </AppContextProvider>
  );
}

export default App;
