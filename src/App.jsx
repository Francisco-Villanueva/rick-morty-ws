import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, WelcomePage } from "./pages";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
