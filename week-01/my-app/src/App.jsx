import "./App.css";
import ListOfToDoLists from "./assets/lists/ListOfTodoLists.jsx";
import NewUserForm from "./assets/forms/NewUserForm.jsx";
import useDatabase from "./Data.jsx";

function App() {
  const db = useDatabase();
  return (
    <>
      <h1>ToDo list</h1>
      <NewUserForm database={db} />
      <ListOfToDoLists database={db} />
    </>
  );
}

export default App;
