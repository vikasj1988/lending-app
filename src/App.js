import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "./components/login/login";
import DashboardComponent from "./components/dashboard/dashboard";
import HomeComponent from "./components/home/home";
import HeaderComponent from "./components/header/header";

function App() {
  return (
    <Routes>
      <Route exact path="/home" element={<HomeComponent />}></Route>
      <Route path="/login" element={<LoginComponent />}></Route>
      <Route path="/dashboard" element={<DashboardComponent />}></Route>
      <Route path="/header" element={<HeaderComponent />}></Route>
      <Route path="/" element={<LoginComponent />}></Route>
    </Routes>
  );
}

export default App;
