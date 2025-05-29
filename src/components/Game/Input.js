import React from "react";

function Input({ onSubmit, disabled }) {
  const [text, setText] = React.useState("");
  const onSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form onSubmit={onSubmitForm} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        name="guess-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value.toUpperCase())}
        pattern="[a-zA-z]{5}"
        title="5-letter word"
        disabled={disabled}
      />
    </form>
  );
}

export default Input;
