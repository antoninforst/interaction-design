import "./App.css";
import ListOfToDoLists from "./ListOfTodoLists";

function App() {
  let todos = {
    Anna: ["Buy milk", "Walk the dog", "Finish homework"],
    Bob: ["Clean the house", "Do the laundry", "Cook dinner"],
  };
  return (
    <>
      <h1>ToDo list</h1>
      <ListOfToDoLists lists={todos} />
    </>
  );
}

export default App;
