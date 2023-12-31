// ButtonBack.jsx
import React from "react";
import { useHistory } from "react-router-dom";

const ButtonBack = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <button style={{ cursor: "pointer", color: "black" }} onClick={handleClick}>
      Go back to Home
    </button>
  );
};

export default ButtonBack;
