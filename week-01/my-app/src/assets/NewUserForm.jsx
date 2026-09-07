import { useState } from "react";

export default function NewUserForm({ onAddNewUser, isValid }) {
  let [newUserName, setNewUserName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    onAddNewUser(newUserName);
    setNewUserName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="new-user-name"
        placeholder="Enter a new user name"
        value={newUserName}
        onChange={(e) => setNewUserName(e.target.value)}
      ></input>
      <button type="submit" disabled={!isValid(newUserName)}>
        New user
      </button>
    </form>
  );
}
