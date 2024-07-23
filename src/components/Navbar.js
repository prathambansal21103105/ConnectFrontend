import React from "react";
import useWindowSize from "../useWindowSide";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DummyLanding from "./DummyLanding";
// import Seminars from "./Seminars/Seminars";

const Navbar = (props) => {
  const clickHandler = () => {
    props.triggerModal();
  };
  const [collapseState, setCollapseState] = React.useState(false);
  const size = useWindowSize();
  const collapseToggler = () => {
    setCollapseState((prevstate) => {
      return !prevstate;
    });
  };
  return (
    // <Router>
    //     <DummyLanding />

    //     <Routes>
    //         <Route exact path="/job">
    //             <Seminars />
    //         </Route>

    <div className={styles.navbar}>
      <div className={styles.menu}>
        <div className={styles.brand}>
          <h2>Connect</h2>
        </div>
        {size.width <= 768 && (
          <div className={styles.toggler} onClick={collapseToggler}>
            <img src="https://github.com/pb1705/Images/blob/main/menu-4-16.png?raw=true"></img>
          </div>
        )}
      </div>
      <div className={styles.navbar__content}>
        {size.width > 768 && (
          <ul className={styles.ul}>
            {props.search && (
              <li className={styles.search}>
                <input
                  type="text"
                  placeholder="Enter Designation.."
                  onClick={clickHandler}
                ></input>
              </li>
            )}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/joblistings">Job/ Internship</Link>
            </li>
            <li>
              <Link to="/learnings">Learning</Link>
            </li>

            <li>
              <Link to="/login">Sign Up</Link>
            </li>
          </ul>
        )}
      </div>
      {collapseState && size.width <= 768 && (
        <ul className={styles.ul}>
          {props.search && (
            <li>
              <input
                type="text"
                placeholder="Enter Designation.."
                onClick={clickHandler}
              ></input>
            </li>
          )}
          <li>
            <a href="#">Sign Up</a>
          </li>

          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Job/ Internship</a>
          </li>
          <li>
            <a href="#">Learning</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      )}
    </div>

    //     </Routes>
    // </Router>
  );
};

export default Navbar;
