import AplicacionContextProvider from "./contexts/contextoAplicacion";
 
import ListaReserva from "./componentes/ListaReservas";
export default function Registrar_alumno() {
  return (
 
          <AplicacionContextProvider>
            <ListaReserva />
          </AplicacionContextProvider>
      
  );
}
