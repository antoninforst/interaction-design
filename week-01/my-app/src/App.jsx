import './App.css'
import ToDoList from './ToDoList'

function App() {
  let todos = {
    "Anna" : ["Buy milk", "Walk the dog", "Finish homework"],
    "Bob" : ["Clean the house", "Do the laundry", "Cook dinner"]
  }
  return (
    <>
      <h1>ToDo list</h1>
      <ToDoList name="Anna" todos={anna} />
    </>
  )
}

export default App
