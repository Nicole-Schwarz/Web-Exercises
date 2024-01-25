import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button> Click me!</Button>
      <Button> No, click me!</Button>
      <Button> Hell no, here, click me!</Button>
      <Button>
        <strong> Forget the rest, click me! </strong>{" "}
      </Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
