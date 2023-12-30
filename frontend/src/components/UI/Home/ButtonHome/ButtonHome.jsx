import styles from './styles.module.css'

/* eslint-disable react/prop-types */
const ButtonHome = ({children, ...props}) => {
  return (
    <button className={styles.button} {...props}>
        {children}
    </button>
  )
}

export default ButtonHome