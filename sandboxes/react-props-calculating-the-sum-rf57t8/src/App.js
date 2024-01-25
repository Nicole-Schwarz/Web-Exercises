import React from "react";
import "./styles.css";

function Sum({ valueA, valueB }) {
  return (
    <h1>
      {valueA} + {valueB} = {valueA + valueB}
    </h1>
  );
}

export default function App() {
  return (
    <div>
      <Sum valueA={5} valueB={6} />
    </div>
  );
}
