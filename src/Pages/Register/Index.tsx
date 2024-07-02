import { Box, Button, Stack, TextField } from "@mui/material";
import "./Register.css";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { useState } from "react";

type User={
    value:string;
    error:boolean;
    msg:string
}
const Index = () => {
    const [userName,setUserName] = useState<User>({
        value:"",
        error:false,
        msg:""
    })
  return (
    <Box className="main-register">
      <Box className="register-box">
        <Box className="first-card card">
          <h1>Register</h1>

          <Stack sx={{ mt: "2rem" }} gap={"1.5rem"}>
            <Box className="inside-box">
              <PersonIcon />
              <TextField sx={{width:"15rem"}} placeholder="Username" value={userName.value} error={userName.error} helperText={userName.msg} required onChange={(e)=>{
                if(userName.value.length === 0){
                    setUserName({
                        value:e.target.value,
                        error:true,
                        msg:"user name cannot be empty"
                      })
                }else{
                    setUserName({
                        value:e.target.value,
                        error:false,
                        msg:""
                      })
                }
              }} size="small" />
            </Box>
            <Box className="inside-box">
              <EmailIcon />
              <TextField  sx={{width:"15rem"}} size="small" />
            </Box>
            <Box>phone</Box>
            <Box>password</Box>
            <Box>Agreement</Box>
            <Button>Register</Button>
          </Stack>
        </Box>
        <Box className="second-card card"></Box>
      </Box>
    </Box>
  );
};

export default Index;
