import React from "react";
import styles from './Card.module.css'
const Card = (props) => {
  return (
    <div className={styles.outerdiv}>
      <div className={styles.header}>
        <div>
          <h2>{props.jobtitle}</h2>
          <p>{props.organization}</p>
          <p>
            {props.experience} | {props.salary}
          </p>
          <p>{props.location}</p>
        </div>
        <div className={styles.logo}>
          <img src={props.src}></img>
        </div>
      </div>
      <div className={styles.description}>
        <p>{props.jobDesciption}</p>
      </div>
      <hr></hr>
      <div className={styles.footer}>
        <div className={styles.actions}>
        <p>
          Posted: {props.date} | Applicants: {props.count}
        </p>
        </div>
        <div>
          <button className={styles.button}>Apply</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
