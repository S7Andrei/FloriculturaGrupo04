import { useState } from "react";

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

      const data = Object.entries(myData.entries());

      // const formData = {
      //   plantName,
      //   plantSubtitle,
      //   plantType,
      //   price,
      //   discountPercentage,
      //   label,
      //   features,
      //   description,
      // };

      fetch("http://localhost:3000/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully");
  
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
      <form onSubmit={handleSubmit}>
        <h2>Title: Plant Registration</h2>
        <div>
          <label>
            Plant Name:
            <input
              type="text"
              value={plantName}
              onChange={(e) => setPlantName(e.target.value)}
            />
            {errors.plantName && <span>{errors.plantName}</span>}
          </label>
        </div>
        <div>
          <label>
            Plant Subtitle:
            <input
              type="text"
              value={plantSubtitle}
              onChange={(e) => setPlantSubtitle(e.target.value)}
            />
            {errors.plantSubtitle && <span>{errors.plantSubtitle}</span>}
          </label>
        </div>
        <div>
          <label>
            Plant Type:
            <input
              type="text"
              value={plantType}
              onChange={(e) => setPlantType(e.target.value)}
            />
            {errors.plantType && <span>{errors.plantType}</span>}
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors.price && <span>{errors.price}</span>}
          </label>
          <label>
            Discount Percentage:
            <input
              type="text"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
            />
            {errors.discountPercentage && (
              <span>{errors.discountPercentage}</span>
            )}
          </label>
        </div>
        <div>
          <span>Label:</span>
          <label>
            Indoor
            <input
              type="radio"
              value="indoor"
              checked={label === "indoor"}
              onChange={() => setLabel("indoor")}
            />
          </label>
          <label>
            Outdoor
            <input
              type="radio"
              value="outdoor"
              checked={label === "outdoor"}
              onChange={() => setLabel("outdoor")}
            />
          </label>
        </div>
        <div>
          <label>
            Features:
            <textarea
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
            />
            {errors.features && <span>{errors.features}</span>}
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {errors.description && <span>{errors.description}</span>}
          </label>
        </div>
        <button type="submit">Register</button>
      </form>

      <figure>
        <img src="../assets/plant.svg" alt="A model plant" />
      </figure>
    </>
  );
};

export default Register;
