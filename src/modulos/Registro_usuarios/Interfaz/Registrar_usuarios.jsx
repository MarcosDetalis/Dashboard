import AplicacionContextProvider from "./contexts/contextoAplicacion";
 
import ListasUsuarios from "./componentes/Listas_usuarios";
export default function Registrar_alumno() {
  return (
    <AplicacionContextProvider>
      <ListasUsuarios />
    </AplicacionContextProvider>
  );
}
