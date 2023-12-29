import styles from "./InputContainer.module.css";

function InputContainer({ children }) {
  return <p className={styles.inputContainer}>{children}</p>;
}

export default InputContainer;
