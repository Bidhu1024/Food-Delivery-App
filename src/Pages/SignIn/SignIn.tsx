import { Box } from "@mui/material";
import axios from "axios";
import "./SignIn.css";
import SignInForm from "./SignInForm";
import { useEffect, useState } from "react";
const SignIn = () => {


  const [items, setItems] = useState([]);

  // useEffect(() => {
  //   axios.get("https://localhost:5000")
  //     .then(response => setItems(response.data))
  //     .catch(error => console.error(error));
  // }, []);

  console.log(items);

  return (
    <Box className="main-div">
      <Box className="card-main">
        <SignInForm />
      </Box>
    </Box>
  );
};

export default SignIn;
