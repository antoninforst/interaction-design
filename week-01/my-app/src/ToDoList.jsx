export default function ToDoList({ name, todos}) { // if in {} in unwraps it into so called props
    function handleAdd() {
        console.log("New task added");
    }
    return (
        <>
            <h2>{name}'s ToDo list</h2>
            <ul>
                {todos.map(
                    (elem, index) => (
                    <li key={index}>{elem}</li>
                ))}
            </ul>

            <button onClick={handleAdd}>Add new task</button>
        </>
    )
}