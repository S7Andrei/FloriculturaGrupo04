/* eslint-disable react/prop-types */
import imgPlant from "../../assets/plants.png";

const CardContent = ({ id, name, price, label }) => {
  return (
    <div key={id} className="card">
      <div>
        <img
          src={imgPlant}
          alt="Uma bela planta em seu vaso"
          style={{ width: "200px" }}
        />
      </div>
      <div className="card-content">
        <p id="name">{name}</p>
        <p id="price">${price}.00</p>
        <p id="label">{label}</p>
      </div>
    </div>
  );
};

export default CardContent;
