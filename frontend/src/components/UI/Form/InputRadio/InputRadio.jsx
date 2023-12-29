import styles from "./InputRadio.module.css";

function InputRadio({ label, id, name, ...props }) {
  return (
    <p>
      <input
        type="radio"
        name={name}
        id={id}
        className={styles.inputRadio}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </p>
  );
}

export default InputRadio;
