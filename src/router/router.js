import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DashboardComponent from "../components/dashboard/dashboard";
import LoginComponent from "../components/login/login";
// import your route components too

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
    <Route path="login" element={<LoginComponent />}></Route>
      <Route path="dashboard" element={<DashboardComponent />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);