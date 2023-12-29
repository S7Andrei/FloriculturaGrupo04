import styles from './Footer.module.css';
import bkgreen from '../../assets/bkgreen.png';
import logo from "../../assets/logowhite.svg";

const Footer = () => {
    return (
      <footer className={styles.footerContent}>
         
         <div className={styles.footerContainer}>

          <ul>
              <li className>
                  <h1>Stay Fresh</h1>
              </li>
              <li>
                  <h3>compassinhos@gmail.com</h3>
              </li>
              <li>
                  <h3>+55 41 99999-9999</h3>
              </li>
          </ul>

        <div className={styles.LinkCommunityContainer}>

          <ul>
            <li>
                <h2>Links</h2>
            </li>  
            <li>
                <h3>About us</h3>
            </li>
            <li>
                <h3>Products</h3>
            </li>
                <h3>Blogs</h3>
            <li>
            </li>
          </ul>

            
          <ul>
            <li>
                <h2>Community</h2>
            </li>  
            <li>
                <h3>About us</h3>
            </li>
            <li>
                <h3>Products</h3>
            </li>
            <li>
                <h3>Blogs</h3>
            </li>
          </ul>

        </div>
    
         </div>

        <div className={styles.footerContainer}>
            <figure>
                    <img src={logo} alt="" style={{ width: "50px" }} />
            </figure>
          <ul>
            <li>
                <h3>Compassinhos ®. All rights reserved.</h3>
            </li>
          </ul>
        </div>

      </footer>
    )
  }
  
  export default Footer