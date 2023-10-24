
import AplicacionContextProvider from "./contexts/contextoAplicacion";
 
import ListaPias from "./components/Listado_Paises";
export default function Registro() {
  return (
 
          <AplicacionContextProvider>
            <ListaPias />
          </AplicacionContextProvider>
      
  );
}
