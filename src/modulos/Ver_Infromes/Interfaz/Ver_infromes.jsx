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

 
import dayjs from "dayjs";

import { useState } from "react";



import PDFFile from "./PDFFile";
import { PDFDownloadLink } from "@react-pdf/renderer";


export default function Ver_infromes() {
  

  const [fechadesde, setFechadesde] = useState();
  const [fechahasta, setFechahasta] = useState();
  const [listaS, setListaS] = useState(1);
  const [radio, setRadio] = useState(1);
  
  
  const handleChange = (event) => {
    setListaS(event.target.value);
  };
  const radioCha = (event) => {
    setRadio(event.target.value);
  };
  
  
  return (
    <div className="inner_page login ">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login"></div>
              <div className="login_form">
                <fieldset>
                  <div className="form-row">
                    <div className="col-md-6 form-group">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Ingresar Fecha Desde"
                          value={fechadesde || dayjs()}
                          onChange={(newValue) => setFechadesde(newValue)}
                          format="DD/MM/YYYY"
                        />
                      </LocalizationProvider>
                    </div>

                    <div className="col-md-6 form-group">
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                          label="Ingresar Fecha Hasta"
                          value={fechahasta || dayjs().add(30, "day")}
                          onChange={(newValue) => setFechahasta(newValue)}
                          format="DD/MM/YYYY"
                        />
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
                          value={listaS || 1}
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>Ingenieria Informatica</MenuItem>
                          <MenuItem value={2}>Derecho</MenuItem>
                          <MenuItem value={3}>Contabilidad</MenuItem>
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
                        value={radio || "1"}
                        onChange={radioCha}
                      >
                        <FormControlLabel
                          value={1}
                          control={<Radio />}
                          label="Devueltos"
                          required
                        />
                        <FormControlLabel
                          value={2}
                          control={<Radio />}
                          label="No devuelto"
                          required
                        />
                      </RadioGroup>
                    </FormControl>
                  </div>

                  <Stack direction="row" spacing={2}>
                    <PDFDownloadLink
                      document={
                        <PDFFile
                          dato={{
                            r: radio,
                            l: listaS,
                            dd: (fechadesde || dayjs()).format("YYYY/MM/DD"),
                            dh: (fechahasta || dayjs().add(30, "day")).format(
                              "YYYY/MM/DD"
                            ),
                          }}
                        />
                      }
                      filename="FORM"
                    >
                      {({ loading }) =>
                        loading ? (
                          <Button variant="outlined">Esperar</Button>
                        ) : (
                          <Button variant="outlined">Enviar</Button>
                        )
                      }
                    </PDFDownloadLink>

                    <Button variant="contained">Salir</Button>
                  </Stack>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


//https://github.com/diegomura/react-pdf/issues/975