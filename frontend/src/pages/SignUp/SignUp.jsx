import { useState } from "react";
import styles from "../Login/styles.module.css";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleCadastro = (e) => {
    e.preventDefault();

    const myForm = new FormData(e.target);

    const data = Object.fromEntries(myForm.entries());
    console.log(data);

    const { email, password } = data;
    const dataUser = {
      email: email,
      password: password,
    };

    console.log(dataUser);

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataUser),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.id) {
          console.log("Form submitted successfully");
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  return (
    <section className={styles.container}>
      <div className={styles.singContainer}>
        <h1 className={styles.h1}>Sign-up</h1>
        <form onSubmit={handleCadastro}>
          <p className={styles.inputContainer}>
            <label htmlFor="email" className={styles.inputLabel}>
              Email:
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputForm}
            />
          </p>
          <p className={styles.inputContainer}>
            <label htmlFor="password" className={styles.inputLabel}>
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputForm}
            />
          </p>
          <p id={styles.btnCenter}>
            <ButtonHome type="submit">Cadastrar</ButtonHome>
          </p>
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default SignUp;
