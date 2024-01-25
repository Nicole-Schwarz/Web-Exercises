import "./styles.css";

function Greeting({ name }) {
  const coaches = ["Merle", "Diego", "Niklas", "Roland"];
  const isCoach = coaches.includes(name);

  return <h1>{isCoach ? "Hello Coach!" : `Hello ${name}!`}</h1>;
}
export default function App() {
  return (
    <div>
      <Greeting name="Merle" />
      <Greeting name="Sebastian" />
      <Greeting name="Roland" />
    </div>
  );
}
