import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TodoList.css";

const TodoList = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    let newTodo = { ...todo, id: uuid() };
    setTodo((todo) => [...todo, newTodo]);
  };

  const removeTodo = (id) => {
    const currentBoxes = todo.filter((t) => t.id !== id);
    setTodo(currentBoxes);
  };

  const handleRemove = (id) => {
    removeTodo(id);
  };

  const renderTodos = () => {
    return (
      <ul>
        {todo.map((todo) => (
          <div key={todo.id}>
            <li>{todo.todo}</li>
            <button onClick={() => handleRemove(todo.id)}>X</button>
          </div>
        ))}
      </ul>
    );
  };

  return (
    <div className="todo-list">
      <NewTodoForm addTodo={addTodo} />
      {renderTodos()}
    </div>
  );
};
export default TodoList;
