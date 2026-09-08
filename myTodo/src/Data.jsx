import { useState, useEffect, useRef } from "react";

export default function useDatabase() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : {},
  );

  const nextId = useRef(
    Math.max(
      -1,
      ...Object.values(todos)
        .flat()
        .map((todo) => todo.id),
    ) + 1,
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function isUserValid(userName) {
    const trimmedName = userName.trim();
    return trimmedName !== "" && !(trimmedName in todos);
  }

  function addUser(userName) {
    if (!isUserValid(userName)) return;

    setTodos({ ...todos, [userName.trim()]: [] });
  }

  function addTodo(userName, newTask) {
    const newItem = {
      id: nextId.current++,
      owner: userName,
      name: newTask,
      isDone: false,
    };

    setTodos((previousTodos) => ({
      ...previousTodos,
      [userName]: [...previousTodos[userName], newItem],
    }));
  }

  function deleteTodo(userName, todoId) {
    setTodos((previousTodos) => ({
      ...previousTodos,

      [userName]: previousTodos[userName].filter((todo) => todo.id !== todoId),
    }));
  }

  function toggleTodo(userName, todoId) {
    setTodos((previousTodos) => ({
      ...previousTodos,

      [userName]: previousTodos[userName].map((todo) =>
        todo.id === todoId
          ? {
              ...todo,
              isDone: !todo.isDone,
            }
          : todo,
      ),
    }));
  }
  function deleteUser(userName) {
    setTodos((previousTodos) => {
      const { [userName]: _, ...remainingTodos } = previousTodos;
      return remainingTodos;
    });
  }

  return {
    todos,
    isUserValid,
    addUser,
    addTodo,
    deleteTodo,
    toggleTodo,
    deleteUser,
  };
}
