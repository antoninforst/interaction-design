import { NewTodoForm } from "../forms/NewTodoForm.jsx";

export default function ToDoList({
  name,
  todos,
  onAddTodo,
  onDeleteTodo,
  onCheckTodo,
}) {
  function handleAdd(newTask) {
    onAddTodo(newTask);
  }

  return (
    <>
      <h2>
        <span className="TodoListName">{name}</span>'s ToDo list
      </h2>
      <ul className="TodoUl">
        {todos.map((elem) => (
          <li
            className={`TodoItem ${elem.isDone ? "TodoItemDone" : ""}`}
            key={elem.id}
            onClick={() => onCheckTodo(elem.id, !elem.isDone)}
          >
            <input
              type="checkbox"
              checked={elem.isDone}
              onChange={(event) => onCheckTodo(elem.id, event.target.checked)}
              onClick={(event) => event.stopPropagation()}
            />
            <span className="TodoItemName">{elem.value}</span>
            <button
              className="DeleteButton"
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                onDeleteTodo(elem.id);
              }}
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
