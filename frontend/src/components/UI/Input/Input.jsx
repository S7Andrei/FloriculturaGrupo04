import styles from "./Input.module.css";

function Input({
  label,
  id,
  name,
  placeholder,
  type = "text",
  erroMsg,
  ...props
}) {
  return (
    <p className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        {...props}
      />
      {erroMsg && <span>{erroMsg}</span>}
    </p>
  );
}

export default Input;
