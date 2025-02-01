import { Outlet, Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import "./Layout.css"

const Layout = () => {
  return (
    <>
      {/* <body> */}

      
        
    <nav>

        <ul className="nav-list">
          <li>
            <Link to="/"><h2>Home</h2></Link>
          </li>
        
          
          <li>
            <Link to="/Blog"><h2>Blog</h2></Link>
          </li>


          <li>
            <Link to="/salespage"><h2>Sales Page</h2></Link>
          </li>
   

          <li>
            <Link to="/prices"><h2>Prices</h2></Link>
          </li>
          

     
          <li>
            <Link to="/contact"><h2>Contact</h2></Link>
          </li>
        
        
        </ul>

        </nav>

      {/* </body> */}

      <Outlet />
    </>
  )
};

export default Layout;