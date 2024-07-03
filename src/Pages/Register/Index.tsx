import { Box, Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import "./Register.css";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { Link } from "react-router-dom";
type User = {
  value: string;
  error: boolean;
  msg: string;
};
const Index = () => {
  const emailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
  const [userName, setUserName] = useState<User>({
    value: "",
    error: false,
    msg: "",
  });
  const [email, setEmail] = useState<User>({
    value: "",
    error: false,
    msg: "",
  });
  const [phone, setPhone] = useState({
    value: null,
    error: false,
    msg: "",
  });
  const [password, setPassword] = useState<User>({
    value: "",
    error: false,
    msg: "",
  });
  return (
    <Box className="main-register">
      <Box className="register-box">
        <Box className="first-card card">
            <Box sx={{display:"flex", justifyContent:"center"}}>
          <h1>Register</h1>
</Box>
          <Stack sx={{ mt: "1rem" }} gap={"1.5rem"}>
            <Box className="inside-box">
              <PersonIcon />
              <TextField
                sx={{ width: "20rem" }}
                placeholder="Username"
                value={userName.value}
                error={userName.error}
                helperText={userName.msg}
                required
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  if (userName.value.length === 0) {
                    setUserName({
                      value: e.target.value,
                      error: true,
                      msg: "user name cannot be empty",
                    });
                  } else {
                    setUserName({
                      value: e.target.value,
                      error: false,
                      msg: "",
                    });
                  }
                }}
                size="small"
              />
            </Box>
            <Box className="inside-box">
              <EmailIcon />
              <TextField
                placeholder="Email"
                value={email.value}
                error={email.error}
                helperText={email.msg}
                sx={{ width: "20rem" }}
                size="small"
                required
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  if (emailRegex.test(email.value)) {
                    setEmail({
                      value: e.target.value,
                      error: false,
                      msg: "",
                    });
                  }
                }}
              />
            </Box>
            <Box className="inside-box">
              <LocalPhoneIcon />
              <TextField
                placeholder="Phone Number"
                value={phone.value}
                error={phone.error}
                helperText={phone.msg}
                sx={{ width: "20rem" }}
                size="small"
                required
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  if (Number(phone.value.length) !== 0) {
                    setPhone({
                      value: e.target.value,
                      error: false,
                      msg: "",
                    });
                  }
                }}
              />
            </Box>
            <Box className="inside-box">
              <KeyboardIcon />
              <TextField
                placeholder="Password"
                value={password.value}
                error={password.error}
                helperText={password.msg}
                sx={{ width: "20rem" }}
                size="small"
                required
                onChange={(
                  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
                ) => {
                  if (emailRegex.test(email.value)) {
                    setPassword({
                      value: e.target.value,
                      error: false,
                      msg: "",
                    });
                  }
                }}
              />
            </Box>
            <Box className="inside-box">
                <Checkbox />
                <Typography variant="body2" color="text.secondary">
                    I agree to the <Link to="/terms">Terms of Service</Link>
                </Typography>
            </Box>
            <Button variant="contained">Register</Button>
          </Stack>
        </Box>
        <Box className="second-card card">
            <Box className="inside-box">
                <Box className="imagess"></Box>
            </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
