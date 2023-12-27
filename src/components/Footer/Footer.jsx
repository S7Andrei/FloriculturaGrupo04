const Footer = () => {
    return (
      <footer>
          {/*Logo a ser inserida: <img src={} />*/}
          <ul>
              <li>
                  <h1>Stay Fresh</h1>
              </li>
              <li>
                  <h3>compassinhos@gmail.com</h3>
              </li>
              <li>
                  <h3>+55 41 99999-9999</h3>
              </li>
          </ul>

        <div> {/* Div Container a ser configurado*/}
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
            <li>
                <h3>Blogs</h3>
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
        
          <ul>
            <li>
                {/*img (plantPeace): <img src={} />*/}
            </li>
            <li>
                <h3>Compassinhos ®. All rights reserved.</h3>
            </li>
          </ul>

      </footer>
    )
  }
  
  export default Footer