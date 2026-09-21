import ToDoList from "./ToDoList";

export default function ListOfToDoLists({ database }) {
  return (
    <>
      <ToDoList
        name={"Tony"}
        todos={database.todos}
        onAddTodo={database.addTodo}
        onDeleteTodo={database.deleteTodo}
        onCheckTodo={database.toggleTodo}
      />
    </>
  );
}
