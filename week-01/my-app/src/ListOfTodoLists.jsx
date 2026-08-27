import ToDoList from "./ToDoList";

export default function ListOfToDoLists({ lists }) {
  return (
    <>
      {Object.entries(lists).map(([name, todos]) => (
        <ToDoList name={name} todos={todos} key={name} />
      ))}
    </>
  );
}
