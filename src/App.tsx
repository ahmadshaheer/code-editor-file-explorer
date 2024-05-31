import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

import { directories } from "./mock";
function App() {
  return (
    <div className="App">
      <Sidebar directories={directories} />
    </div>
  );
}

export default App;
