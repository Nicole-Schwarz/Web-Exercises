import Card from "./components/Card";

const fruits = [
  { id: 1337, name: "🍌 Banana", color: "yellow" },
  { id: 1338, name: "🍎 Apple", color: "red" },
  { id: 1339, name: "🍉 Watermelon", color: "red" },
  { id: 1340, name: "🍐 Pear", color: "green" },
  { id: 1341, name: "🍒 Cherries", color: "red" },
];

export default function App() {
  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
