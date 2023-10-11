import {useEffect,useState} from 'react'
import {getSolicitudes} from './Infra/grafica-servicio'
// import {cantidadpendiente} from './Infra/grafica-servicio'

// importaciones de graficas
// tipo linel
import {Line} from 'react-chartjs-2';

import {Chart as ChartJS, CategoryScale, LinearScale, PointElement, 
        LineElement, Title,Tooltip,Legend,} from 'chart.js';       
// elementos a utilizar para options
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);



// array de eje y 
 const cantidadreservas=[1,2,13,4,56,7,78,9,10,100];
// const cantidad=[0,11,8,12,34,56,3];

// datos del eje x
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];




export default function Interfaz() {
  // apartado de estados y ussefect con el servicio
// estado con usseeffect para iterar los datos de solicitud
const [usuario,setUsuario]=useState([]);

useEffect(()=>{
  getSolicitudes().then((datos)=>
  setUsuario(datos)
  )
},[])

// ussefect de cantidad(contador)
// useEffect(()=>{
//   cantidadpendiente().then((datos)=>
//   setUsuario(datos)
//   )
// },[])





console.log(usuario)
labels
// const labels =usuario.idreservas
  const data = {
    // eje x
    labels,
    datasets: [
      {
        label: 'Reservas realizadas',
        // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        tension:0.5,
        fill:true,
        pointRadius:5,
        // eje x
        data: cantidadreservas,
        borderColor: 'rgb(99, 237, 255)',
        backgroundColor: 'rgba(99, 141, 255, 0.5)',
        pointBackgroundColor:'rgba(99, 255, 206, 0.5)',
        pointBorderColor:'rgba(255, 99, 219, 0.748)'
      },
      // labels,
      // {
      //   label: 'Libros devueltos',
      //   // labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   tension:0.25,
      //   fill:true,
      //   pointRadius:5,
      //   data: cantidad,
      //   borderColor: 'rgb(255, 130, 99)',
      //   backgroundColor: 'rgba(255, 99, 99, 0.5)',
      //   pointBackgroundColor:'rgba(99, 255, 206, 0.5)',
      //   pointBorderColor:'rgba(255, 99, 219, 0.748)'
      // },
    ],
  };
  
  
  // varable options que tien las propeidades
   const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        text: 'Reservas Realizadas',
      },
    },
  };




  return (
    <div>
      {" "}
      <div className="row column_title">
        <div className="col-md-12">
          <div className="page_title">
            <h2>Panel Principal</h2>
          </div>
        </div>
      </div>
      <div className="row column1">
        <div className="col-md-6 col-lg-3">
          <div className="full counter_section margin_bottom_30">
            <div className="couter_icon">
              <div>
                <i className="fa fa-user yellow_color"></i>
              </div>
            </div>
            <div className="counter_no">
              <div>
                <p className="total_no"></p>
                <p className="head_couter">Cantidad de Solicitud</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="full counter_section margin_bottom_30">
            <div className="couter_icon">
              <div>
                <i className="fa fa-retweet blue1_color"></i>
              </div>
            </div>
            <div className="counter_no">
              <div>
                <p className="total_no">20</p>
                <p className="head_couter">Atrasos de Entrega</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="full counter_section margin_bottom_30">
            <div className="couter_icon">
              <div>
                <i className="fa fa-pie-chart green_color"></i>
              </div>
            </div>
            <div className="counter_no">
              <div>
                <p className="total_no">350</p>
                <p className="head_couter">Cantidad de Libros</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="full counter_section margin_bottom_30">
            <div className="couter_icon">
              <div>
                <i className="fa fa-cloud-download green_color"></i>
              </div>
            </div>
            <div className="counter_no">
              <div>
                <p className="total_no">350</p>
                <p className="head_couter">Cantidad de Libros</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row column_title pl-5 border border-danger ">
        <div className="col-md-8">
          <h1 className="">Reservas</h1>
          <div className="page_title">
          <div>
              <Line data={data} 
                    options={options}
              />
              </div>
          </div>
        </div>
    </div>
    </div>
  );
}
