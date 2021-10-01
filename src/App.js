import "./App.css";
import ContainerContainer from "./Components/Container/Container.Component";
import store from "./Components/Redux/store/Store";

import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ContainerContainer />
      </div>
    </Provider>
  );
}

export default App;
