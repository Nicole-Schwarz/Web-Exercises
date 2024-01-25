import React from "react";
import "./styles.css";

function ButtonComponent({ color, fontColor, disabled, text, onClick }) {
  return (
    <button
      disabled={disabled}
      style={{ backgroundColor: color, color: fontColor }}
      onClick={onClick}
      className="buttons"
    >
      {text}
    </button>
  );
}

export default function App() {
  function handleClick() {
    console.log("Clicked");
  }
  return (
    <div>
      <ButtonComponent
        text="Click me"
        color="red"
        fontColor="yellow"
        onClick={handleClick}
      />
      <ButtonComponent
        text="Save"
        color="green"
        fontColor="pink"
        onClick={handleClick}
      />
      <ButtonComponent
        text="Delete"
        color="black"
        fontColor="white"
        onClick={handleClick}
      />
    </div>
  );
}
