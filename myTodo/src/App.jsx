import "./App.css";
import ListOfToDoLists from "./assets/lists/ListOfTodoLists.jsx";
import useDatabase from "./Data.jsx";

function App() {
  const db = useDatabase();
  return (
    <div className="App">
      <h1>ToDo lists</h1>
      <ListOfToDoLists database={db} />
    </div>
  );
}

export default App;
