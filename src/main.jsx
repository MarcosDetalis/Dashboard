 
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./modulos/login/Interfaz/Login";
import { PrivateRoute } from "./router/Router_private";

ReactDOM.render(
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Login />} />
  <Route
    element={
      <PrivateRoute isAllowed={!!sessionStorage.getItem("reservas")} />
    }
  >
    <Route path="*" element={<App />} />
  </Route>
</Routes>
</BrowserRouter>,
  document.getElementById("root")
);
