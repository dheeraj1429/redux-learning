import "./App.css";
import ContainerContainer from "./Components/Container/Container.Component";
import store from "./Components/Redux/store/Store";

store.subscribe(() => {
  console.log(store.getState());
});

function App() {
  return (
    <div className="App">
      <ContainerContainer />
    </div>
  );
}

export default App;
