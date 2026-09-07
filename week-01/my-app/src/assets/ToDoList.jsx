import { NewTodoForm } from "./NewTodoForm.jsx";

export default function ToDoList({ name, todos, onAddTodo, onDeleteTodo }) {
  // if in {} in unwraps it into so called props
  {
    /* 
  const SAMPLE_TASKS = [
    "Buy milk",
    "Call the landlord",
    "Book the dentist",
    "Water the plants",
    "Reply to Mette",
  ];

  function randomTask() {
    return SAMPLE_TASKS[Math.floor(Math.random() * SAMPLE_TASKS.length)];
  }
  */
  }
  function handleCheck(todoIndex) {
    onCheckTodo(name, todoIndex);
  }

  function handleAdd(newTask) {
    onAddTodo(name, newTask);
  }

  return (
    <>
      <h2>
        <span className="name">{name}</span>'s ToDo list
      </h2>
      <ul>
        {todos.map((elem, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => handleCheck(index)} />
            {elem}
            <button type="button" onClick={() => onDeleteTodo(name, index)}>
              X
            </button>
          </li>
        ))}
      </ul>

      <NewTodoForm onAddNewTodo={handleAdd}></NewTodoForm>
    </>
  );
}
