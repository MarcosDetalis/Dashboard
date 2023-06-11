import React from 'react'
 
import Validacion from "../Dominio/ANDALAPUTA"

export default function Registrar_alumno() {

  const [inputs, handleFieldChange, getErrors, errors, fhoneerrors] = Validacion({
    password: "",
    verificarpassword: "",
    telefono:""
  });
  const submit = () => {
    getErrors();

  };
  console.log("kkk", errors.op)
  return (
    <div className="inner_page login">
      <div className="full_container">
        <div className="container">
          <div className="center verticle_center full_height">
            <div className="login_section">
              <div className="logo_login"></div>
              <div className="login_form">
                <form>
                  <div class="form-row">
                    <div class="col-md-6 form-group">
                      <label for="nombre">Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        id="nombre"
                        name="nombre"
                        required
                      />
                      <div class="invalid-feedback">
                        Por favor ingrese su nombre.
                      </div>
                    </div>
                    <div class="col-md-6 form-group">
                      <label for="apellido">Apellido</label>
                      <input
                        type="text"
                        class="form-control"
                        id="apellido"
                        name="apellido"
                        required
                      />
                      <div class="invalid-feedback">
                        Por favor ingrese su apellido.
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="correo">Correo electrónico</label>
                    <input
                      type="email"
                      class="form-control"
                      id="correo"
                      name="correo"
                      required
                    />
                    <div class="invalid-feedback">
                      Por favor ingrese un correo electrónico válido.
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 form-group">
                      <label for="password">Contraseña </label>
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        value={inputs.password}
                        onChange={handleFieldChange}
                        required
                      />
                      {errors?.op && (
                        <span className="text-danger center  font-weight-bold">
                          {errors.op}
                        </span>
                      )}
                    </div>
                    <div class="col-md-6 form-group">
                      <label for="verificar-password">
                        Verificar contraseña
                      </label>
                      <input
                        type="password"
                        class="form-control"
                        id="verificarpassword"
                        name="verificarpassword"
                        value={inputs.verificarpassword}
                        onChange={handleFieldChange}
                        required
                      />
                      {errors?.op && (
                        <span className="text-danger center  font-weight-bold">
                          {errors.op}
                        </span>
                      )}
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="Rol">Rol</label>
                    <select
                      class="form-control"
                      id="carrera"
                      name="carrera"
                      required
                    >
                      <option value="" selected disabled>
                        Seleccione un Rol
                      </option>
                      <option value="Administrador">Administrador</option>
                      <option value="Bibliotecario">Bibliotecario</option>
                    </select>
                    <div class="invalid-feedback">
                      Por favor seleccione un Rol.
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="col-md-6 form-group">
                      <label for="telefono">Teléfono</label>
                      <input
                        type="number"
                        class="form-control"
                        id="telefono"
                        name="telefono"
                        value={inputs.telefono}
                        onChange={handleFieldChange}
                        required
                      />
                      {fhoneerrors?.up && (
                        <span className="text-danger center  font-weight-bold">
                          {fhoneerrors.up}
                        </span>
                      )}
                      <div class="invalid-feedback">
                        Por favor ingrese su número de teléfono.
                      </div>
                    </div>
                  </div>
                  <input
                    type="submit"
                    class="btn btn-primary"
                    onClick={submit}
                  />
                  <input type="reset" class="btn btn-secondary m-2" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}