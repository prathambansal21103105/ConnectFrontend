import React from "react";
import styles from "./SeminarCard.module.css";
const SeminarCard = (props) => {
  return (
    <div className={styles.container}>
      <div>
        <h2>{props.title}</h2>
        <img style={{width:'200px'}} src={props.srcimg}></img>
        {props.srcvideo != undefined && <iframe src={props.srcvideo}></iframe>}
        <p>Date : {props.date} | Time : {props.time}</p>
        <p>Platform : {props.platform}</p>
        <p>
          Location :{" "}
          <a href={props.url != "" ? props.url : ""}>{props.location}</a>
        </p>
        <p>Description: {props.description}</p>
        <hr></hr>
        <p className={styles.timestamp}>Posted on: {props.timestamp}</p>
      </div>
    </div>
  );
};

export default SeminarCard;
