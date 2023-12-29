import InputContainer from "../InputContainer/InputContainer";
import Label from "../Label/Label";

import styles from "./Textarea.module.css";

function Textarea({ id, name, label, placeholder, errorMsg, ...props }) {
  return (
    <InputContainer>
      <Label htmlFor={id} label={label} />
      <textarea
        name={name}
        id={id}
        placeholder={placeholder}
        className={styles.inputTextarea}
        {...props}
      ></textarea>
      {errorMsg && <span>{errorMsg}</span>}
    </InputContainer>
  );
}

export default Textarea;
