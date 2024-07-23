import React from "react";
import Navbar from "../Navbar";
import JobFilter from "../JobOppurtunites/JobFilter";
import SeminarCard from "./SeminarCard";
import styles from "./Seminar.module.css";
import RightFeed from "../UI/RightFeed";
import useWindowSize from "../../useWindowSide";
import LeftFeed from "../UI/LeftFeed";
const Seminars = (props) => {
  let size = useWindowSize();
  return (
    <div>
      <LeftFeed></LeftFeed>
      <div className={styles.container}>
        <SeminarCard
          title="NCC volunteer"
          date="12/04/2001"
          time="16:00 to 17:00"
          platform="offline"
          location="PEC Auditorium"
          description="hgbwjkabvojbcvghxfcjugvcfxdtrghyjun btycghjv chdfyjcutgcghcjuh"
          timestamp="14/07/2023"
          srcimg="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></SeminarCard>
        <SeminarCard
          title="Teacher"
          date="12/04/2001"
          time="16:00 to 17:00"
          platform="online"
          location="GMeet"
          description="hgbwjkabvojbcvghxfcjugvcfxdtrghyjun btycghjv chdfyjcutgcghcjuh"
          timestamp="14/07/2023"
          srcimg="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></SeminarCard>
        <SeminarCard
          title="CP"
          date="12/04/2001"
          time="16:00 to 17:00"
          platform="online"
          location="GMeet"
          description="hgbwjkabvojbcvghxfcjugvcfxdtrghyjun btycghjv chdfyjcutgcghcjuh"
          timestamp="14/07/2023"
         srcimg="https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ></SeminarCard>
        {props.seminars.map((seminar) => {
          return (
            <SeminarCard
              title={seminar.title}
              description={seminar.description}
              timestamp={seminar.timestamp}
              srcvideo={seminar.srcvideo != "" ? seminar.srcvideo : undefined}
              srcimg={seminar.srcimg}
              platform={seminar.platform}
              location={seminar.location}
              date={seminar.date}
              time={seminar.time}
            ></SeminarCard>
          );
        })}
        {size.width > 1350 && <RightFeed></RightFeed>}
      </div>
    </div>
  );
};
export default Seminars;
