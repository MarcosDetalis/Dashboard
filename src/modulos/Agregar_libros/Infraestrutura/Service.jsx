
   export  async function  PostsReservas  (alumno,estado,fecha)  {
     try {
       let res = await fetch("http://localhost:4005/api/ingresar", {
         headers: { "Content-Type": "application/json" },
         method: "POST",
         body: JSON.stringify({
           alumno: alumno,
           fecha: fecha,
           estado: estado,
         }),
       });
       await res.json();
       if (res.status === 201) {
         console.log("Enviadoo con exito");
       } else {
         console.log("error al enviar ");
       }
     } catch (err) {
       console.log(err);
     }
  
  };

  

