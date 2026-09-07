import ToDoList from "./ToDoList";

export default function ListOfToDoLists({
  lists,
  onAddTodo,
  onDeleteTodo,
  onCheckTodo
}) {
  return (
    <>
      {Object.entries(lists).map(([name, todos]) => (
        <ToDoList
          name={name}
          todos={todos}
          key={name}
          onAddTodo={onAddTodo}
          onDeleteTodo={onDeleteTodo}
          onCheckTod={onCheckTodo}
        />
      ))}
    </>
  );
}
