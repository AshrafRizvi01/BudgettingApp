import React from 'react'
// import * as FaIcons from "react-icons/fa"
// import * as AiIcons from "react-icons/ai";
import {Link} from "react-router-dom"
import { SidebarData } from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';

function Navbar() {
/*  >> Will be implemented for the icon only menu
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar); */
    return (
      <>
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
          </div>
          <nav className='nav-menu-active'>
            <ul className="nav-menu-items">
              <li className="navbar-toggle">
                <h1 className="top-bar-text">Best Budget</h1>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span> {item.title} </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar
