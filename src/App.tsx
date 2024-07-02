import "./App.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Index from "./Pages/Register/Index";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/register" element={<Index/>} />
      </Routes>
    </Router>
  );
}

export default App;
