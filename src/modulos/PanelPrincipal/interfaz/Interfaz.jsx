 

export default function Interfaz() {
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
                <p className="total_no">20</p>
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
    </div>
  );
}
