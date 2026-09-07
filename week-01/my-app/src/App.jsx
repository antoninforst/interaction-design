import { useState, useEffect } from "react";
import "./App.css";
import ListOfToDoLists from "./assets/ListOfTodoLists";
import NewUserForm from "./assets/NewUserForm.jsx";

function App() {
  const [todos, setTodos] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : {},
  );

  function isUserValid(userName) {
    const trimmedName = userName.trim();
    return trimmedName !== "" && !(trimmedName in todos);
  }

  function handleAddUser(theNewUserName) {
    if (!isUserValid(theNewUserName)) return;

    setTodos({ ...todos, [theNewUserName.trim()]: [] });
  }

  function handleAddTodo(userName, newTask) {
    setTodos({
      ...todos,
      [userName]: [...todos[userName], newTask],
    });
  }

  function handleDeleteTodo(userName, todoIndex) {
    setTodos({
      ...todos,
      [userName]: todos[userName].filter((_, index) => index !== todoIndex),
    });
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <h1>ToDo list</h1>
      <NewUserForm onAddNewUser={handleAddUser} isValid={isUserValid} />
      <ListOfToDoLists
        lists={todos}
        onAddTodo={handleAddTodo}
        onDeleteTodo={handleDeleteTodo}
        onCheckTodo={(userName, todoIndex) => {
      />
    </>
  );
}

export default App;
