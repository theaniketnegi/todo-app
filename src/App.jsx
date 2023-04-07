import Card from "./UI/Card";
import InputField from "./components/InputField";
import ItemsList from "./components/ItemsList";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("tasks") !== null) {
      setTasks(JSON.parse(localStorage.getItem("tasks")));
    }
  }, []);

  const addTaskHandler = (task) => {
    if (task.trim().length === 0) return;
    const id = Date.now().toString();
    const newTask = { id: id, task: task };
    setTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      console.log(updatedTasks.length);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      if (updatedTasks.length > 0) localStorage.setItem("tasks", updatedTasks);
      else localStorage.removeItem("tasks");
      return updatedTasks;
    });
  };
  const clearTasksHandler = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
  };

  useEffect(() => {
    if (tasks.length > 0) localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Card>
        <InputField addTask={addTaskHandler} />
        <ItemsList tasks={tasks} deleteTask={deleteTaskHandler} />
        <Footer tasks={tasks} clearTasks={clearTasksHandler} />
      </Card>
    </>
  );
};

export default App;
