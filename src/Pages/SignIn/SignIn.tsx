import { Box } from "@mui/material";
import axios from "axios";
import "./SignIn.css";
import SignInForm from "./SignInForm";
import { useEffect, useState } from "react";
const SignIn = () => {


  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:5000")
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  console.log(items);

  return (
    <Box className="main-div">
      <Box className="card-main">
        {/* <SignInForm /> */}
        <div>
      <h1>Items</h1>
      <ul>
        {items.map(item => (
          <li key={item?._id}>
            <h3>{item?.name}</h3>
            {/* <p>{item.description}</p> */}
          </li>
        ))}
      </ul>
    </div>
      </Box>
    </Box>
  );
};

export default SignIn;
