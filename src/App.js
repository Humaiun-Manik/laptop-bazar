import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div className="app">
      <Header />
      <Shop />
    </div>
  );
}

export default App;
