import { useState, useEffect } from "react";
import {
  fetchTodos,
  createTodo,
  toggleTodo as toggleTodoService,
  deleteTodo as deleteTodoService,
} from "./services/todoService";

// for saving into localStorage go to commit: 24bac16f6599371941291f808703389d521c4053

export default function useDatabase() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos().then(setTodos).catch(console.error);
  }, []);

  async function addTodo(newTask) {
    const newItem = await createTodo(newTask);
    setTodos((previousTodos) => [...previousTodos, newItem]);
  }

  async function deleteTodo(todoId) {
    await deleteTodoService(todoId);
    setTodos((previousTodos) =>
      previousTodos.filter((todo) => todo.id !== todoId),
    );
  }

  async function toggleTodo(todoId, newValue) {
    const updatedTodo = await toggleTodoService(todoId, newValue);
    setTodos((previousTodos) =>
      previousTodos.map((todo) => (todo.id === todoId ? updatedTodo : todo)),
    );
  }

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  };
}
