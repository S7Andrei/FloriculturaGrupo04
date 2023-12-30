import { useEffect, useRef, useState } from "react";
import styles from "./InputRadio.module.css";

function InputRadio({ label, id, name, ...props }) {
  return (
    <p className={styles.inputRadioContainer}>
      <input
        type="radio"
        name={name}
        id={id}
        className={styles.inputRadio}
        {...props}
      />
      <label htmlFor={id} className={styles.inputRadioLabel}>
        {label}
      </label>
    </p>
  );
}

export default InputRadio;
