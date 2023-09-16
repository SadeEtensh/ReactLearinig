import "./App.css";
import { Greet } from "./components/Greet";
function App() {
  return (
    <div className="App">
      <Greet />
      <Greet />
      <Greet />
    </div>
  );
}

export default App; // Defalt export- U can import the Componet with any Name U like

// Named Export
// if we append export to function export const funcName---we have to import the func with exact name
