import { useState } from "react";

const NewBoxForm = ({ addBoxs }) => {
  const INITIAL_STATE = { bgColor: "", w: "", h: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBoxs(formData);
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
      <label htmlFor="bgColor">Background Color:</label>
      <input
        id="bgColor"
        name="bgColor"
        value={formData.bgColor}
        onChange={handleChange}
      />

      <label htmlFor="w">Width:</label>
      <input id="w" name="w" value={formData.w} onChange={handleChange} />

      <label htmlFor="h">Height:</label>
      <input id="h" name="h" value={formData.h} onChange={handleChange} />
      <button>Add New Box!</button>
    </form>
  );
};

export default NewBoxForm;
