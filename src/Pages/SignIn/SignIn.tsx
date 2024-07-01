import { Box } from "@mui/material";
import "./SignIn.css";
import SignInForm from "./SignInForm";
const SignIn = () => {
  return (
    <Box className="main-div">
      <Box className="card-main">
        <SignInForm />
      </Box>
    </Box>
  );
};

export default SignIn;
