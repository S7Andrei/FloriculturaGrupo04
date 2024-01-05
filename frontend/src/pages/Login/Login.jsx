/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/login/loginSlice";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";
import ErrosForm from "../../components/ErrosForm/ErrosForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email it is a mandatory field")
      .min(5, "Email must have at least 5 characters")
      .matches(/.*@.*/, "Enter a valid email"),
    password: yup
      .string()
      .required("Password it is a mandatory field")
      .min(5, "Password must have at least 5 characters"),
  })
  .required();

const Login = ({ onClose }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/users");
      const users = await response.json();
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );

      if (user) {
        navigate("/");
        dispatch(userActions.handleUpdateLogin());
        localStorage.setItem('isLogado', true);
        onClose();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw new Error("An error occurred during login");
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.loginContainer}>
        <h1 className={styles.h1}>Login</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <p className={styles.inputContainer}>
            <label className={styles.inputLabel}>Email:</label>
            <input
              type="text"
              id="email"
              className={styles.inputForm}
              {...register("email")}
            />
            <ErrosForm errors={errors?.email?.message} />
          </p>
          <p className={styles.inputContainer}>
            <label className={styles.inputLabel}>Password:</label>
            <input
              type="password"
              id="password"
              className={styles.inputForm}
              {...register("password")}
            />
            <ErrosForm errors={errors?.password?.message} />
          </p>

          <p id={styles.btnCenter}>
            <ButtonHome type="submit">Login</ButtonHome>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
