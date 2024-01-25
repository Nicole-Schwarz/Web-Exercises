import React from "react";
import "./styles.css";

function Smiley({ isHappy }) {
  return (
    <div>
      I'm{" "}
      {isHappy ? (
        <span role="img" aria-label="happy smiley">
          😀
        </span>
      ) : (
        <span role="img" aria-label="sad smiley">
          😔
        </span>
      )}
      {"."}
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Smiley isHappy />
      <Smiley />
    </div>
  );
}
