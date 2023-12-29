import styles from "./Label.module.css";

function Label({ htmlFor, label }) {
  return (
    <label htmlFor={htmlFor} className={styles.inputLabel}>
      {label}
    </label>
  );
}

export default Label;
