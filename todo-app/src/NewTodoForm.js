import { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
  const INITIAL_STATE = { todo: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Todo:</label>
      <input
        id="todo"
        name="todo"
        type="text"
        value={formData.todo}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodoForm;
