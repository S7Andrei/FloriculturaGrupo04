import styles from "./InputRadio.module.css";

function InputRadio({ label, id, name, checked, ...props }) {
  return (
    <p className={styles.inputRadioContainer}>
      <input
        type="radio"
        name={name}
        id={id}
        checked={checked}
        className={styles.inputRadio}
        {...props}
      />
      <label
        htmlFor={id}
        className={`${styles.inputRadioLabel} ${
          checked ? styles.checkedLabel : ""
        }`}
      >
        {label}
      </label>
    </p>
  );
}

export default InputRadio;
