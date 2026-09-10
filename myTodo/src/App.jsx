import "./App.css";
import ListOfToDoLists from "./assets/lists/ListOfTodoLists.jsx";
import NewUserForm from "./assets/forms/NewUserForm.jsx";
import useDatabase from "./Data.jsx";

function App() {
  const db = useDatabase();
  return (
    <div className="App">
      <h1>ToDo lists</h1>
      <NewUserForm database={db} />
      <ListOfToDoLists database={db} />
    </div>
  );
}

export default App;
