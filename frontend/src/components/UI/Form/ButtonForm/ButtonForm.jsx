import styles from "./ButtonForm.module.css";

function ButtonForm({ children, ...props }) {
  return (
    <button className={styles.btnForm} {...props}>
      {children}
    </button>
  );
}

export default ButtonForm;
