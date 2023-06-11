 
import useFields from "../Dominio/vali";
export default function App() {
  const [fields, handleFieldChange, getErrors, errors] = useFields({
    name: ""
  });
  const submit = () => {
      getErrors(); 
      
  };
    console.log("daATA", errors.op);
    return (
      <div className="inner_page login">
        <div className="full_container">
          <div className="container">
            <div className="center verticle_center full_height">
              <div className="login_section">
                <div className="logo_login"></div>
                <div className="login_form"></div>

                <div className="App">
                  <h1>Custom hook</h1>
                  <div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={fields.name}
                      onChange={handleFieldChange}
                      
                    />
                    <br />
                    {errors?.op && (
                      <small className="text-danger">{errors.op}</small>
                    )}
                  </div>
                  <button onClick={submit}>Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}




 