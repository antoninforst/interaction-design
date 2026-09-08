import { useState } from "react";

export function NewTodoForm({ onAddNewTodo }) {
  let [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newTask.trim() === "") return;

    onAddNewTodo(newTask);
    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="new-task-content"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />

      <button type="submit" disabled={newTask.trim() === ""}>
        Add new task
      </button>
    </form>
  );
}
