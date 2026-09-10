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
        <span className="TodoListName">{name}</span>'s ToDo list
        <button
          className="DeleteButton"
          type="button"
          onClick={() => onDeleteUser(name)}
        >
          X
        </button>
      </h2>
      <ul className="TodoUl">
        {todos.map((elem) => (
          <li
            className={`TodoItem ${elem.isDone ? "TodoItemDone" : ""}`}
            key={elem.id}
            onClick={() => onCheckTodo(name, elem.id)}
          >
            {<input type="checkbox" checked={elem.isDone} />}
            <span className="TodoItemName">{elem.name}</span>
            <button
              className="DeleteButton"
              type="button"
              onClick={() => onDeleteTodo(name, elem.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>

      <NewTodoForm onAddNewTodo={handleAdd}></NewTodoForm>
    </>
  );
}
