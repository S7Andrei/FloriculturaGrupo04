import InputContainer from "../InputContainer/InputContainer";
import Label from "../Label/Label";

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
    <InputContainer>
      <Label htmlFor={id} label={label} />
      <input
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className={styles.inputForm}
        {...props}
      />
      {erroMsg && <span>{erroMsg}</span>}
    </InputContainer>
  );
}

export default Input;
