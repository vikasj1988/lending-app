import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
//import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { LoginOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
//import "./login.css";
const LoginComponent = () => {
  const [isSignup, setIsSignp] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputs.email !== "" && inputs.password !== "") {
      setIsLogin(true);
      sessionStorage.setItem("username", inputs.email);
      sessionStorage.setItem("isLoggedIn", true);
      navigate("/dashboard");
    }
    console.log(inputs);
  };
  const resetState = () => {
    setIsSignp(!isSignup);
    setInputs({ name: "", email: "", password: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {isSignup ? "Signup" : "Login"}
          </Typography>

          {isSignup && (
            <TextField
              onChange={handleChange}
              value={inputs.name}
              name="name"
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="Name"
            />
          )}
          <TextField
            onChange={handleChange}
            value={inputs.email}
            name="email"
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="Email"
          />
          <TextField
            onChange={handleChange}
            value={inputs.password}
            name="password"
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="Password"
          />
          <Button
            endIcon={isSignup ? <HowToRegIcon /> : <LoginOutlined />}
            type="submit"
            sx={{ marginTop: 3, borderRadius: 3 }}
            variant="contained"
            color="success"
          >
            {isSignup ? "Signup" : "Login"}
          </Button>
          <Button
            endIcon={isSignup ? <LoginOutlined /> : <HowToRegIcon />}
            onClick={resetState}
            sx={{ marginTop: 3, borderRadius: 3 }}
          >
            Change to {isSignup ? "Login" : "Signup"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default LoginComponent;
