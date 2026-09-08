import { NewTodoForm } from "../forms/NewTodoForm.jsx";

export default function ToDoList({
  name,
  todos,
  onAddTodo,
  onDeleteTodo,
  onCheckTodo,
  onDeleteUser,
}) {
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
  function handleAdd(newTask) {
    onAddTodo(name, newTask);
  }

  return (
    <>
      <h2>
        <span className="name">{name}</span>'s ToDo list
        <button type="button" onClick={() => onDeleteUser(name)}>
          X
        </button>
      </h2>
      <ul>
        {todos.map((elem) => (
          <li key={elem.id}>
            {
              <input
                type="checkbox"
                onChange={() => onCheckTodo(name, elem.id)}
                checked={elem.isDone}
              />
            }
            {elem.name}
            <button type="button" onClick={() => onDeleteTodo(name, elem.id)}>
              X
            </button>
          </li>
        ))}
      </ul>

      <NewTodoForm onAddNewTodo={handleAdd}></NewTodoForm>
    </>
  );
}
