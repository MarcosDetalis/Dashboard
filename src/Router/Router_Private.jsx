
import { Navigate, Outlet } from "react-router-dom";
 
import {  useEffect, useState } from "react";
  import ScaleLoader from "react-spinners/ScaleLoader";

export const PrivateRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}) => {
  const [reservas, setReservas] = useState();

  
 /*
  useEffect(() => {
    fetch("http://localhost:4005/login/toket", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        token: isAllowed,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setReservas(res.message);
        /*
        console.log("resallooo", res.message.result[0].token);
             console.log("firstooo ", res.message);
        if (res.status ==500) {
          console.log("firstooo55 ", res.status);
          setReservas(1);
        } else {
          setReservas(0);
           console.log("firstooo55 ", res.status);
           setReservas(1);
        }
      
      });
  
  }, [isAllowed]);*/
      
  


  const apiFetch = async () => {
    return await fetch("http://localhost:4005/login/toket", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        token: isAllowed,
      }),
    })
      .then((res) => {console.log("api", res.status); setReservas(res.status); })
      .catch((res) => console.log("api",res.status));
  };

 

   apiFetch()
 console.log("apo", reservas, apiFetch());
    
  if ("500" == reservas) {
    return <Navigate to={redirectTo} replace />;
  } else {  

     
    return children ? children : <Outlet />;
  }
};
