import { useState } from "react";
import { useDispatch } from "react-redux";
import { plantsActions } from "../../store/plants/plantsSlice";
import { getPlants } from "../../store/plants/plantsAction";
import Input from "../../components/UI/Form/Input/Input";

import styles from "./Register.module.css";
import Textarea from "../../components/UI/Form/Textarea/Textarea";
import ButtonForm from "../../components/UI/Form/ButtonForm/ButtonForm";
import InputRadio from "../../components/UI/Form/InputRadio/InputRadio";

const Register = () => {
  const [plantName, setPlantName] = useState("");
  const [plantSubtitle, setPlantSubtitle] = useState("");
  const [plantType, setPlantType] = useState("");
  const [price, setPrice] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState("");
  const [label, setLabel] = useState("indoor");
  const [features, setFeatures] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();

  async function updateStatePlants() {
    const data = await getPlants();
    dispatch(plantsActions.handleGetPlants(data));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    if (!plantName) {
      validationErrors.plantName = "Plant Name is required";
    }
    if (!plantSubtitle) {
      validationErrors.plantSubtitle = "Plant Subtitle is required";
    }
    if (!plantType) {
      validationErrors.plantType = "Plant Type is required";
    }
    if (!price) {
      validationErrors.price = "Price is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const myData = new FormData(e.target);

      let isInSale;
      const data = Object.fromEntries(myData.entries());
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

      console.log(description);
      console.log(data);

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

            e.target.reset();
            setErrors({});
          } else {
            throw new Error("Failed to submit form");
          }
        })
        .catch((error) => {
          console.error("Form submission error:", error);
        });
    }
  };

  return (
    <>
      <section className={styles.registerContainer}>
        <form onSubmit={handleSubmit} className={styles.formContainer}>
          <h2 className={styles.registerTitle}>Plant Registration</h2>
          <Input
            id={"name"}
            name={"name"}
            placeholder={"Echinocereus Cactus"}
            label={"Plant Name"}
            value={plantName}
            onChange={(e) => setPlantName(e.target.value)}
            erroMsg={errors.plantName}
          />
          <Input
            id={"subtitle"}
            name={"subtitle"}
            placeholder={"A majestic addition to your plant collection"}
            label={"Plant Subtitle"}
            value={plantSubtitle}
            onChange={(e) => setPlantSubtitle(e.target.value)}
            erroMsg={errors.plantSubtitle}
          />
          <Input
            id={"plantType"}
            name={"plantType"}
            label={"Plant Type"}
            placeholder={"Cactus"}
            value={plantType}
            onChange={(e) => setPlantType(e.target.value)}
            erroMsg={errors.plantType}
          />
          <div className={styles.halfInputs}>
            <Input
              id={"price"}
              name="price"
              label={"Price"}
              type="number"
              placeholder={"$139.99"}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              erroMsg={errors.price}
            />
            <Input
              id={"discountPercentage"}
              name="discountPercentage"
              label={"Discount Percentage"}
              type="number"
              placeholder={"20%"}
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
              erroMsg={errors.discountPercentage}
            />
          </div>
          <div>
            <h3 className={styles.labelRadios}>Label:</h3>
            <div className={styles.inputRadioControl}>
              <InputRadio
                id={"indoor"}
                value="indoor"
                label={"Indoor"}
                checked={label === "indoor"}
                name="labelDoor"
                onChange={() => setLabel("indoor")}
              />
              <InputRadio
                id={"outdoor"}
                name="labelDoor"
                value="outdoor"
                label={"Outdoor"}
                checked={label === "outdoor"}
                onChange={() => setLabel("outdoor")}
              />
            </div>
          </div>
          <Textarea
            id={"feature"}
            name="features"
            label={"Features"}
            placeholder={"Species: Echinocereus..."}
            errorMsg={""}
            value={features}
            onChange={(e) => setFeatures(e.target.value)}
          />
          <Textarea
            id={"description"}
            name="description"
            label={"Description"}
            placeholder={"Ladyfinger cactus..."}
            errorMsg={errors.description}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <ButtonForm type="submit">Register</ButtonForm>
        </form>
      </section>
    </>
  );
};

export default Register;
