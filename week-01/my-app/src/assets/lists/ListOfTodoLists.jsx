import ToDoList from "./ToDoList";

export default function ListOfToDoLists({ database }) {
  return (
    <>
      {Object.entries(database.todos).map(([name, todos]) => (
        <ToDoList
          name={name}
          todos={todos}
          key={name}
          onAddTodo={database.addTodo}
          onDeleteTodo={database.deleteTodo}
          onCheckTodo={database.toggleTodo}
          onDeleteUser={database.deleteUser}
        />
      ))}
    </>
  );
}
