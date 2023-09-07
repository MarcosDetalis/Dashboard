 
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./modulos/login/Interfaz/Login";
import { PrivateRoute } from "./Router/Router_Private";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/AgregarBibliografia"
        element={
          <PrivateRoute>
            {" "}
            <App />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
