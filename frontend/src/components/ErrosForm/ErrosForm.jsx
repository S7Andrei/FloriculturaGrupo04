/* eslint-disable react/prop-types */
import styles from './styles.module.css'

const Erros = ({errors}) => {
  return (
    errors !== undefined && (
        <p id={styles.erros}>{errors}</p>
    )
  )
}

export default Erros