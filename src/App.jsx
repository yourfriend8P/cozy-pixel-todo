import Sidebar from "./components/Sidebar";
import TodoBoard from "./components/TodoBoard";
import background from "./assets/background.png";
import title from "./assets/Title.png";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [trash, setTrash] = useState(() => {
    const saved = localStorage.getItem("trash");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("trash", JSON.stringify(trash));
  }, [trash]);

  function addTask(text) {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  function clearTrash() {
    setTrash([]);
  }

  function clearAll() {
    setTrash([...trash, ...tasks]);
    setTasks([]);
  }

  function clearCompleted() {
    const completed = tasks.filter((t) => t.completed);
    const remaining = tasks.filter((t) => !t.completed);
    setTrash([...trash, ...completed]);
    setTasks(remaining);
  }

  const visibleTasks =
    filter === "completed"
      ? tasks.filter((t) => t.completed)
      : filter === "trash"
        ? trash
        : tasks;

  return (
    <div className="flex flex-col justify-center">
      <img
        src={background}
        aria-hidden="true"
        className="fixed inset-0 -z-10 h-full w-full object-cover"
        style={{ objectPosition: "center 65%" }}
      />
      <div className="flex justify-center">
        <img
          src={title}
          className="w-50"
          style={{ marginTop: "24px", marginBottom: "42px" }}
        />
      </div>
      <div className="flex flex-row justify-center" style={{ padding: "16px" }}>
        <TodoBoard
          tasks={visibleTasks}
          addTask={addTask}
          toggleTask={toggleTask}
          filter={filter}
        />
        <div
          className="absolute"
          style={{
            marginLeft: "16px",
            left: "calc(60% + 270px)",
            marginTop: "140px",
          }}
        >
          <Sidebar
            filter={filter}
            setFilter={setFilter}
            clearAll={clearAll}
            clearCompleted={clearCompleted}
            clearTrash={clearTrash}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
