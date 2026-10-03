import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enviado, setEnviado] = useState(false);

  const camposVacios = email.trim() === "" || password.trim() === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="login">
      <form className="login__card" onSubmit={handleSubmit}>
        <h2 className="login__title">Iniciar sesión</h2>
        <p className="login__hint">
          Esta pantalla es solo de interfaz: no valida credenciales reales ni se conecta a ningún servidor.
        </p>

        <label className="login__label" htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          className="login__input"
          placeholder="tucorreo@ejemplo.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={enviado}
        />

        <label className="login__label" htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          className="login__input"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={enviado}
        />

        <button className="login__button" type="submit" disabled={camposVacios || enviado}>
          {enviado ? "Enviado" : "Entrar"}
        </button>
      </form>
    </section>
  );
}

export default Login;