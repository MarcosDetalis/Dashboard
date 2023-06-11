 
import { useState } from "react";

export default function useFormFields(initialState) {

  const [fields, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

    console.log("...", fields);
     
    console.log("first",fields);
    const getErrors = () => {
        if (fields.name.trim() !== "") {
             
            setErrors({ ...errors, op:" "});
        } else {
            setErrors({ ...errors, op: `El  es requerido` });
       }


        
    //  Object.keys(fields).forEach((field) => {
    //    if (!fields[field].trim()) {
    //      setErrors({ ...errors, [field]: `El ${field} es requerido` });
    //    } else {
    //      let newErrors = { ...errors };
    //      delete newErrors[field];
    //      setErrors({ ...newErrors });
    //    }
    // });
  };
console.log(errors)
  return [
    fields,
    function (event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    },
    getErrors,
    errors
  ];
}

