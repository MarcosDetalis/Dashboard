import { useEffect, useState } from "react";
 import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

export default function Interfaz() {
  const [reservas, setReservas] = useState([]);
 
  // useEffect(() => {
  //   setReservas(JSON.parse(localStorage.getItem("reservas")));
  // }, []);

  //Se hace la peticion a la api (Asi no es la manera de que se debe hacer)
  useEffect(() => {
    fetch("http://localhost:4005/ping")
      .then((response) => response.json())
      .then((res) => {
        setReservas(res);
      });
    
  }, []);
  
  let re = reservas.map((item) => item.l)
 
  console.log(Number(re));

  const data = [
    { name: "Cantidad de solicitud", biblio: Number(re) },
    { name: "Atrasos de Entrega", biblio: 2 },
    { name: "Cantidad de Libros", biblio: 20 },
  ];

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
                <p className="total_no">{re}</p>
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
                <p className="total_no">{re}</p>
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
      <BarChart width={600} height={230} data={data}>
        <Bar dataKey="biblio" fill="#15283c" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
    </div>
  );
}
