import { useDispatch } from "react-redux";
import { plantsActions } from "../../store/plants/plantsSlice";
import { getPlants } from "../../store/plants/plantsAction";

import styles from "./Register.module.css";

import ButtonForm from "../../components/UI/Form/ButtonForm/ButtonForm";

import plant from "../../assets//plantForm.svg";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required().min(5),
    subtitle: yup.string().required(),
    price: yup
      .number()
      .positive()
      .required()
      .typeError("A number is required in the field"),
  })
  .required();

const Register = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  async function updateStatePlants() {
    const data = await getPlants();
    dispatch(plantsActions.handleGetPlants(data));
  }

  const handleSubmitForm = (data) => {
    console.log(data);

    let isInSale;

    const {
      description,
      discountPercentage,
      features,
      labelDoor,
      name,
      plantType,
      price,
      subtitle,
    } = data;

    if (discountPercentage > 0) {
      isInSale = "promo";
    } else {
      isInSale = "notPromo";
    }

    const plantsObject = {
      name: name,
      subtitle: subtitle,
      label: [plantType, labelDoor],
      isInSale,
      price: price,
      discountPercentage: discountPercentage,
      features: features,
      description: description,
    };

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(plantsObject),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Form submitted successfully");

          updateStatePlants();
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .catch((error) => {
        console.error("Form submission error:", error);
      });
  };

  console.log(errors);
  console.log(errors?.name?.message);
  console.log(errors);

  return (
    <>
      <section className={styles.registerContainer}>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={styles.formContainer}
        >
          <h2 className={styles.registerTitle}>Plant Registration</h2>
          <label className={styles.inputLabel}>Plant Name</label>
          <input
            id="name"
            type="text"
            placeholder="Echinocereus Cactus"
            className={styles.inputForm}
            {...register("name")}
          />
          {errors?.name?.message !== undefined && (
            <p id={styles.erros}>{errors?.name?.message}</p>
          )}
          <label className={styles.inputLabel}>Plant Subtitle</label>
          <input
            id="subtitle"
            type="text"
            placeholder="A majestic addition to your plant collection"
            className={styles.inputForm}
            {...register("subtitle")}
          />
          {errors?.subtitle?.message !== undefined && (
            <p id={styles.erros}>{errors?.subtitle?.message}</p>
          )}
          <label className={styles.inputLabel}>Plant Type</label>
          <input
            id="type"
            type="text"
            placeholder="Cactus"
            className={styles.inputForm}
            {...register("plantType")}
          />
          {errors?.plantType?.message !== undefined && (
            <p id={styles.erros}>{errors?.plantType?.message}</p>
          )}
          <label className={styles.inputLabel}>Price</label>
          {/* <label className={styles.inputLabel}>Discount percentage</label> */}
          <div className={styles.halfInputs}>
            <input
              id="price"
              type="number"
              placeholder="$139.99"
              className={styles.inputForm}
              step="0.01"
              {...register("price")}
            />

            <input
              id="discountPercentage"
              type="number"
              placeholder="20%"
              className={styles.inputForm}
              {...register("discountPercentage")}
            />
          </div>
          <div className={styles.errosPriceContainer}>
            {errors?.price?.message !== undefined && (
              <p id={styles.erros}>{errors?.price?.message}</p>
            )}
            {errors?.price?.message !== undefined && (
              <p id={styles.erros}>{errors?.price?.message}</p>
            )}
          </div>

          <div>
            <h3 className={styles.labelRadios}>Label:</h3>
            <div className={styles.inputRadioControl}>
              <input
                id="indoor"
                type="radio"
                value="indoor"
                {...register("labelDoor")}
                className={styles.inputRadioLabel}
                checked="indoor"
              />
              <label htmlFor="">indoor</label>
              <input
                id="outdoor"
                type="radio"
                {...register("labelDoor")}
                checked="outdoor"
                value="outdoor"
                className={styles.inputRadioLabel}
              />
              <label htmlFor="">outdoor</label>
            </div>
          </div>

          <label className={styles.inputLabel}>Features</label>

          <textarea
            id="feature"
            {...register("features")}
            placeholder="Species: Echinocereus..."
            className={styles.inputTextarea}
          />
          <label className={styles.inputLabel}>Description</label>
          <textarea
            id="description"
            {...register("description")}
            placeholder="Ladyfinger cactus..."
            className={styles.inputTextarea}
          />

          <ButtonForm type="submit">Register</ButtonForm>
        </form>
        <figure id={styles.img}>
          <img src={plant} />
        </figure>
      </section>
    </>
  );
};

export default Register;
