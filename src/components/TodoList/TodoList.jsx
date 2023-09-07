import React, { useState, useEffect } from "react";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const updateTasks = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      const updatedTasks = [...tasks, task];
      setTasks(updatedTasks);
      updateTasks(updatedTasks);
      setTask("");
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    updateTasks(updatedTasks);
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.titleHeading}>Todo List</h1>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={handleTaskChange}
        />
        <button onClick={addTask}>Add</button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks added yet!</p>
      ) : (
        <div className={styles.listContainer}>
          {tasks.map((task, index) => (
            <div key={index} className={styles.listContainerChild}>
              <p>{task}</p>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
