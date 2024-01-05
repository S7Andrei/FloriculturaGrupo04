import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();

      const user = users.find(
        (user) => user.username === email && user.password === password
      );

      if (user) {
        navigate("/register");
        dispatch(userActions.handleUpdateLogin());
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        <h1 className={styles.h1}>Login</h1>
        <form>
          <p className={styles.inputContainer}>
            <label className={styles.inputLabel}>Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputForm}
            />
          </p>
          <p className={styles.inputContainer}>
            <label className={styles.inputLabel}>Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputForm}
            />
          </p>

          <p id={styles.btnCenter}>
            <ButtonHome type="button" onClick={handleLogin}>
              Login
            </ButtonHome>
          </p>

          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default Login;
