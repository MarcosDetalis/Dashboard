
import AplicacionContextProvider from "./contexts/contextoAplicacion";
 
import ListaReserva from "./components/ListaReservas";
export default function Registro() {
  return (
 
          <AplicacionContextProvider>
            <ListaReserva />
          </AplicacionContextProvider>
      
  );
}
