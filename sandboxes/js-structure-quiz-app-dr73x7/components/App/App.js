export function App() {
  function App() {
    const app = document.createElement("main");
    app.classList.add("app");
    app.append(Header(), Form(), CardList());

    return app;
  }
  return App;
}
