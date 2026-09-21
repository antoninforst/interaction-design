import Parse from "parse/dist/parse.min.js";

Parse.initialize(
  "2eLMMKx4ynKWSC8AkVaTHIQE8gekb7bm8gZvu1QT",
  "6PzPln983fXg60wJtAoH5dXr7L4zjFffwgcQXYID",
);
Parse.serverURL = "https://parseapi.back4app.com/";

const TodoItem = Parse.Object.extend("Todos");

function toPlainObject(parseObject) {
  return {
    id: parseObject.id,
    value: parseObject.get("Value"),
    isDone: parseObject.get("Done"),
  };
}

export async function createTodo(text) {
  const item = new TodoItem();
  item.set("Value", text);
  item.set("Done", false);
  return toPlainObject(await item.save());
}

export async function fetchTodos() {
  const query = new Parse.Query(TodoItem);
  query.ascending("createdAt");
  const results = await query.find();
  return results.map(toPlainObject);
}

export async function toggleTodo(id, done) {
  const item = TodoItem.createWithoutData(id);
  item.set("Done", done);
  return toPlainObject(await item.save());
}

export async function deleteTodo(id) {
  const item = TodoItem.createWithoutData(id);
  await item.destroy();
}
