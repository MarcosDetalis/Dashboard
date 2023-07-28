import { useState } from "react"
import moment from "moment";
export default function Ver_informeValidacio(initialState) {
  const [inputs, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  
console.log(inputs.fechadesde);
    // let fecha2 = inputs.fechadesde;

    
    
    const getErrors = () => {
       let result = moment(inputs.fechadesde, "YYYY-MM-DD", true).isValid();
       
        if ( result == true) {
          setErrors({ ...errors, op: " " });
        } else {
          setErrors({ ...errors, op: "Error en el formato" });
        }
   
   };

  return [
    inputs,
    function (event) {
      setValues({
        ...inputs,
        [event.target.id]: event.target.value,
      });
    },
    getErrors,
    errors,
 
  ];
}
