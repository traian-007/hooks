import React, { useState, useContext, useRef } from "react";
import { useMemo } from "react/cjs/react.development";
import Button from "../components/Button";
import Input from "../components/Input";
import Task from "../components/Task";
import { GlobalContext } from "../context/contextState";

function createNewTask(text) {
  return {
    id: Math.floor(Math.random() * 10000000),
    text: text,
  };
}

const MainPage = () => {
  const [task, setTask] = useState("");
  const { tasks, addTask } = useContext(GlobalContext);
  const ref = useRef(null);

  const newTask = useMemo(() => createNewTask(task), [task]);

  function addTask2() {
    addTask(newTask);
    setTask("");
  }

  function CheckedTask(child, checked) {
    !checked ? ref.current.appendChild(child) : ref.current.prepend(child);
  }

  function takeTaskFromInput(task) {
    let sameTitle = tasks.map((item) => item.text).includes(task);
    if (!sameTitle) {
      setTask(task);
    } else {
      alert("you have same task");
    }
  }

  return (
    <div
      style={{
        width: 400,
        display: "column",
        alignItems: "center",
        margin: "100px auto",
      }}
    >
      <h1> Todo List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 30,
          height: "30px",
        }}
      >
        <Input takeTaskFromInput={takeTaskFromInput} task={task} />
        <Button addTask={addTask2} task={task} />
      </div>
      <div ref={ref}>
        {tasks.map((task) => (
          <Task key={task.id} task={task} CheckedTask={CheckedTask} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
