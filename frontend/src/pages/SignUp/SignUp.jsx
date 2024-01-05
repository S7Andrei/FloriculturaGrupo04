/* eslint-disable no-unused-vars */
import { useState } from "react";
import styles from "../Login/styles.module.css";
import ButtonHome from "../../components/UI/Home/ButtonHome/ButtonHome";
import ErrosForm from "../../components/ErrosForm/ErrosForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

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

const SignUp = () => {
 const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const handleCadastro = (data) => {
    console.log(data)
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
          navigate('/')
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
        <form onSubmit={handleSubmit(handleCadastro)}>
          <p className={styles.inputContainer}>
            <label htmlFor="email" className={styles.inputLabel}>
              Email:
            </label>
            <input
              type="text"
              className={styles.inputForm}
              {...register("email")}
            />
            <ErrosForm errors={errors?.email?.message} />
          </p>
          <p className={styles.inputContainer}>
            <label htmlFor="password" className={styles.inputLabel}>
              Password:
            </label>
            <input
              type="password"
              className={styles.inputForm}
              {...register("password")}
            />
             <ErrosForm errors={errors?.password?.message} />
          </p>
          <p id={styles.btnCenter}>
            <ButtonHome type="submit">Sign-up</ButtonHome>
          </p>
        </form>
      </div>
    </section>
  );
};

export default SignUp;
