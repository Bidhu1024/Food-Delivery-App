import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn";
import Index from "./Pages/Register/Index";
import Home from "./Pages/Home/Home";
import Sidebar from "./Components/Sidebar";
import { Box } from "@mui/material";
import Resturants from "./Pages/Resturants/Resturants";

function App() {

  return (
    <Box width="100%" display="flex" alignItems={"center"}>
    <Router>
      <Box width="10%" borderRight={"1px solid grey"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"}>
        <Sidebar />   
      </Box>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Index />} />
        <Route path="/resturants" element={<Resturants />} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
