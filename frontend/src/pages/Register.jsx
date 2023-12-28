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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      plantName,
      plantSubtitle,
      plantType,
      price,
      discountPercentage,
      label,
      features,
      description,
    };

    fetch("http://localhost:3000/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log(formData);
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
          </label>
          <label>
            Discount Percentage:
            <input
              type="text"
              value={discountPercentage}
              onChange={(e) => setDiscountPercentage(e.target.value)}
            />
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
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
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
