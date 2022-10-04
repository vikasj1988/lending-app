import { Button } from "@mui/material";
import "./login.css";
const LoginComponent = () => {
  return (
    <form>
      <span>UserName</span>
      <input
        type="text"
        className="login-field"
        placeholder="Enter UserName"
      ></input>
      <span>Password</span>
      <input
        type="Password"
        className="login-field"
        placeholder="Enter Password"
      ></input>
      <div>
        return<Button variant="contained">Submit</Button>
      </div>
    </form>
  );
};

export default LoginComponent;
