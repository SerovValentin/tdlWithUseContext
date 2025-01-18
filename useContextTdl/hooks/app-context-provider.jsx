import { AppContext } from "./Context";
import { UpdateContext } from "./UpdateContext";

export const AppContextProvider = ({
  taskList,
  updateTask,
  currentTask,
  updatedTask,
  setCurrentTask,
  setUpdatedTask,
  children,
  setTaskList,
}) => {
  return (
    <AppContext.Provider value={{ taskList, setTaskList }}>
      <UpdateContext.Provider
        value={{
          updateTask,
          currentTask,
          updatedTask,
          setCurrentTask,
          setUpdatedTask,
        }}
      >
        {children}
      </UpdateContext.Provider>
    </AppContext.Provider>
  );
};
