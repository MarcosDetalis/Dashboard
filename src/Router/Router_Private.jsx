
import { Navigate, Outlet } from "react-router-dom";
 
import {  useEffect, useState } from "react";
 

export const PrivateRoute = ({
  isAllowed,
  redirectTo = "/",
  children,
}) => {
     const [reservas, setReservas] = useState();

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
       console.log(res.message)
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
       }*/
     });
 }, [isAllowed]);
  
 console.log("hello", reservas)
    
  if ("Error al autenticarse" == reservas) {
    return <Navigate to={redirectTo} replace />;
  } else {
    return children ? children : <Outlet />;
  }
};
