import React from "react";
import styles from "./JobFilter.module.css";
import Navbar from "../Navbar";
const JobFilter = () => {
  const [clicked, setClicked] = React.useState(false);
  const setClickedHandler =()=>{
    setClicked((prevstate)=>{
        return !prevstate;
    })
  }
  return (
    <div>
      {clicked === false && (
        <Navbar triggerModal={setClickedHandler} search={true}></Navbar>
      )}
      {clicked && (
        <div className={styles.backdrop}>
          <div className={styles.modal}>
            <div className={styles.header}>
              <h2>Connect</h2>
            </div>

            <div>
              <div className={styles.random}>
                <form className={styles.formcontrol}>
                  <div>
                    <input
                      type="text"
                      placeholder="Enter keyword/ designation"
                    ></input>
                  </div>
                  <div className={styles.border}></div>
                  <div>
                    <input placeholder="Enter Experience" type="Number"></input>
                  </div>
                  <div className={styles.border}></div>
                  <div>
                    <input placeholder="Enter location" type="text"></input>
                    
                  </div>
                  <div>
                    <button onClick={setClickedHandler} className={styles.button}>Search</button>
                    </div>
                </form>
              </div>
            </div>
          </div>
          <div onClick={setClickedHandler} className={styles.emptyregion}>

          </div>
        </div>
      )}
    </div>
  );
};

export default JobFilter;
