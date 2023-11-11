import { useEffect, useState } from "react";
import { cantidadPendiente } from "../infra/grafica-servicio";

// importaciones de lo s elementos de chartjs-2
import { Line, Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  BarElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

// array de que aparecera en el eje x
const estados = [ "Solicitudes pendientes", "Solicitudes Activos ",
                  "Soliciutdes Anulados",];

export default function Interfaz() {
  const [cantidadReservas, setCantidadReservas] = useState([]);

  // ussefect de cantidad(contador)
  useEffect(() => {
    cantidadPendiente().then((datos) => setCantidadReservas(datos));
  }, []);

  // variable iteracion de pendientes
  let cantPendiente = cantidadReservas.map((item) => item.pendiente);
  let cantActivo = cantidadReservas.map((item) => item.activos);
  let cantAnulado = cantidadReservas.map((item) => item.anulados);

  // cocncatenacion de reservas
//    let totalreservas=cantidadPendiente.concat(cantActivo).concat(cantAnulado)
// console.log(totalreservas);
  const finalRes = [cantPendiente, cantActivo, cantAnulado].flat();

  // const que teine la suma de activos anulados y pendientes
  let totalreservas = finalRes.reduce((prev, curr) =>prev + curr, 0);
  // const [suma]=useState(totalreservas) veeer como extarer
  
  console.log(totalreservas);

  console.log(cantPendiente);
  console.log(cantActivo);
  // console.log(totalreservas)
  console.log(cantAnulado);
  // const segungenero=[1,2,3,4,5,6,7,8,9,10];
  console.log(finalRes);

  // apartados de los elementos
  var data = {
    // eje x
    labels: estados,
    datasets: [
      {
        label: "cantidad libros",
        tension: 0.5,
        fill: true,
        pointRadius: 12,
        // eje y
        data: finalRes,
        borderColor: "rgb(99, 237, 255)",
        backgroundColor: "rgba(99, 141, 255, 0.5)",
        pointBackgroundColor: "rgba(99, 255, 206, 0.5)",
        pointBorderColor: "rgba(255, 99, 135, 0.748)",
      },
    ],
  };

  // varable options que tiene las propeidades
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Reservas Segun estados",
      },
    },
  };

  // grafico barras
  var carreras = [
    "Informatica",
    "Administracion",
    "Derecho",
    "Comercial",
    "Marketing",
  ]; //ejex
  var numerosVertical = [10, 2, 3, 4, 42]; //eje y
  // varable options que tien las propeidades
  var options2 = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: "Reservas Segun Carreras",
      },
    },
  };

  var data2 = {
    labels: carreras,
    datasets: [
      {
        label: "Cantidad de libros",
        data: numerosVertical,
        // data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor: "rgba(112, 255, 99, 0.5)",
        borderColor: ["rgb(53, 189, 74)"],
        borderWidth: 1,
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
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
                {/* falta destructurar */}
                <p className="total_no">10</p>
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
                <p className="total_no">{cantPendiente}</p>
                <p className="head_couter">Reservas Pendientes</p>
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
                <p className="total_no">{cantActivo}</p>
                <p className="head_couter">Cantidad Activos</p>
                {/* <p className="head_couter">Cantidad de Libros</p> */}
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
                <p className="total_no">{cantAnulado}</p>
                <p className="head_couter">Cantidad de Anulados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contnedor grid de los graficos*/}
      <div className="container text-center ">
        <div className="row">
          <div className="col-md-6 ">
            <div className="page_title mr-3">
              <div>
                <Line data={data} options={options} />
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div className="page_title ml-3">
              <div>
                <Bar data={data2} options={options2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
