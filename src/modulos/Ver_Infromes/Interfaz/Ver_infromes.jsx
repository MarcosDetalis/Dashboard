import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormLabel from "@mui/material/FormLabel";


import Button from "@mui/material/Button";
 
import Stack from "@mui/material/Stack";



import Validacion from "../Dominio/Ver_informeValidacio";
export default function Ver_infromes() {

   



  const [inputs, handleFieldChange, getErrors, errors, pass] = Validacion({
    fechadesde: "",
  });
  const submit = () => {
    getErrors();
  };
  console.log("kkk", errors.op);

  function col() {
    if (errors.op == "Error en el formato") {
      return " border-bottom border-danger ";
    } else {
      return "ss ";
    }
  }

  return (
    <div className="inner_page login ">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login"></div>
              <div className="login_form">
                <form>
                  <fieldset>
                    <div className="form-row">
                      <div className="col-md-6 form-group">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker label="Ingresar Fecha Desde" />
                        </LocalizationProvider>
                      </div>

                      <div className="col-md-6 form-group">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker label="Ingresar Fecha Hasta" />
                        </LocalizationProvider>
                      </div>
                    </div>

                    <div className="field">
                      <br />
                      <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Carreras
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Carreras"
                            required
                          >
                            <MenuItem value={10}>
                              Ingenieria Informatica
                            </MenuItem>
                            <MenuItem value={20}>Derecho</MenuItem>
                            <MenuItem value={30}>Contabilidad</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </div>

                    <div className="field">
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          Tipo de Reporte
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="Devueltos"
                            required
                          />
                          <FormControlLabel
                            value="male"
                            control={<Radio />}
                            label="No devuelto"
                            required
                          />
                        </RadioGroup>
                      </FormControl>
                    </div>

                   
                      <Stack direction="row" spacing={2}>
                        <Button variant="outlined" >
                          Delete
                        </Button>
                        <Button variant="contained"  >
                          Send
                        </Button>
                      </Stack>
                    
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
