import ToDoList from "./ToDoList";

export default function ListOfToDoLists({ lists }) {
    return (
        <>
        {lists.map((list, index) => (
            <ToDoList name={index} todos={list} key={index} />
        ))}
        </>
    )
}