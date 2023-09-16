import "./App.css";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { UserGreeting } from "./components/UserGreeting";
function App() {
  return (
    <div className="App">
      <Greet name="Sade" heroName="Batman" />
      <Greet name="Abebe" heroName="SuperMan" />
      <Greet name="Where" heroName="Wonder Woman">
        <p>This is children props</p>
      </Greet>
      <Message />
      <UserGreeting />
    </div>
    //Props are immutable
  );
}

export default App; // Defalt export- U can import the Componet with any Name U like

// Named Export
// if we append export to function export const funcName---we have to import the func with exact name
