import { useState } from "react";

export default function Form({ planningList, setPlanningList }) {
  const [newTodo, setNewTodo] = useState({
    id: "",
    content: "",
    step: 1,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setPlanningList([...planningList, newTodo]);
    setNewTodo({
      id: "",
      content: "",
      step: 1,
    });
  }
  console.log(planningList);

  function handleChange(evt) {
    const addItem = {
      id: planningList?.length + 1,
      content: evt.target.value,
      step: 1,
    };
    setNewTodo(addItem);
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="conent"
          value={newTodo.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Add To Planning</button>
      </form>
    </div>
  );
}
