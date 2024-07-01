import { Box, Button, Divider, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
type EmailText = {
  value: string;
  error: boolean;
};
const SignInForm = () => {
  const [email, setEmail] = useState<EmailText>({
    value: "",
    error: false,
  });
  const [password, setPassword] = useState<string>("");
  const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;

  // const debounce = (func:any,delay:number)=>{
  //     console.log("called debounce",email.value);
  // let debounceTimeout: number;
  // return (...args:any[])=>{
  //     clearTimeout(debounceTimeout);
  //     debounceTimeout = window.setTimeout(()=>func(...args),delay)
  // }

  // }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({
      value: e.target.value,
      error: false,
    });
  };
  // const handleChange = useCallback(()=>{
  //     debounce(handleEmailChange,50)
  // },[])

  return (
    <Box
      width="100%"
      display={"flex"}
      flexDirection={"column"}
      gap={"1.6rem"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Typography fontSize={"28px"} fontWeight={"600"}>
        Login
      </Typography>
      <Box display="flex" alignItems={"center"}>
        <PersonIcon sx={{ height: "2.5rem" }} />
        <input
          type="email"
          placeholder="Username"
          style={{ height: "2.5rem", width: "20rem" }}
          value={email.value}
          onChange={handleEmailChange}
        />
      </Box>
      <Box display="flex" alignItems={"center"}>
        <HttpsIcon sx={{ height: "2.5rem" }} />
        <input
          type="password"
          placeholder="Password"
          style={{ height: "2.5rem", width: "20rem" }}
          value={password}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(e.target.value)
          }
        />
      </Box>
      <Button
        children={"LOGIN"}
        variant="contained"
        sx={{ width: "18rem", bgcolor: "red" }}
      />
      <Typography>
        Don't have an account? <Link to="/signup">Click Here</Link>
      </Typography>

      <Button
        children={"REGISTER"}
        variant="contained"
        sx={{ width: "18rem", bgcolor: "red" }}
      />
    </Box>
  );
};

export default SignInForm;