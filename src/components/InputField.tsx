import React from "react";

function InputField({ id, label }) {
  return (
    <div>
      <input id={id} type="text" required />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default InputField;
