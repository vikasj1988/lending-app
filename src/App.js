import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import LoginComponent from "./components/login/login";
import DashboardComponent from "./components/dashboard/dashboard";

function App() {
  return (
    <LoginComponent />
    // <Routes>
    //   <Route path="/" element={<Home />}>
    //     <Route path="login" element={<LoginComponent />}/>
    //     <Route path="dashboard" element={<DashboardComponent />}/>
    //   </Route>
    // </Routes>
  );
}

function Home() {
  return <Outlet />;
}
export default App;
