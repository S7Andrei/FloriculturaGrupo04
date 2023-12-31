import { useEffect, useRef, useState } from "react";
import styles from "./InputRadio.module.css";

function InputRadio({ label, id, name, ...props }) {
  const [isChecked, setIsChecked] = useState();
  const input = useRef();

  useEffect(() => {
    const checked = input.current.checked;
    setIsChecked(checked);
  }, [input.current.checked]);

  return (
    <p className={styles.inputRadioContainer}>
      <input
        type="radio"
        name={name}
        id={id}
        className={styles.inputRadio}
        checked={isChecked}
        ref={input}
        {...props}
      />
      <label
        htmlFor={id}
        className={`${styles.inputRadioLabel} ${
          isChecked ? styles.checkedLabel : ""
        }`}
      >
        {label}
      </label>
    </p>
  );
}

export default InputRadio;
