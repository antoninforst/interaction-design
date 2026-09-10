import { useState } from "react";

export default function NewUserForm({ database }) {
  let [newUserName, setNewUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    database.addUser(newUserName);
    setNewUserName("");
  }

  return (
    <form onSubmit={handleSubmit} className="NewTodoForm">
      <input
        id="new-user-name"
        placeholder="Enter a new user name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      ></input>
      <button type="submit" disabled={!database.isUserValid(newUserName)}>
        Add user
      </button>
    </form>
  );
}
