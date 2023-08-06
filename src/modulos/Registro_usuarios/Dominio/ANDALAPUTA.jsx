import { useState } from "react"
export default function ANDALAPUTA(initialState) {
    const [inputs, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [fhoneerrors, setfhoneerrors ] = useState({});//se anade para cada validacion con nombre diferente

    console.log(inputs.password);
    console.log(inputs.verificarpassword);
console.log(inputs.telefono);
  
    const getErrors = () => {
        if(inputs.password =="" || inputs.password.length < 7 ){
            setErrors({ ...errors, op: "la contrasena deb0en ser mayor a 7 digitos " });

        }else{
            
            setErrors({ ...errors, op: "las constresenas no coinciden" });   
        }
        if(inputs.telefono.length <9)
        setfhoneerrors({...fhoneerrors, up: "ejemplo de numero de telefono +5959412584"})
        }
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
        fhoneerrors

    ];

}