import React from "react";
import Card from "../UI/Card";
import useWindowSize from "../../useWindowSide";
import JobFilter from "./JobFilter";
import RightFeed from "../UI/RightFeed";
import LeftFeed from "../UI/LeftFeed";

const JobOpputrunites = (props) => {
  let size = useWindowSize();
  return (
    <div>
     <JobFilter></JobFilter>
     <LeftFeed></LeftFeed>
      <div style={{marginTop:'100px'}}>
        {props.jobs.map((job) => {
          return (
            <Card
              jobtitle={job.jobtitle}
              organization={job.organization}
              experience={job.experience}
              salary={job.salary}
              location={job.location}
              count={job.count}
              date={job.date}
              jobDesciption={job.jobDesciption}
              src={job.src}
            ></Card>
          );
        })}
      </div>
      {size.width > 1350 && <RightFeed></RightFeed>}
    </div>
  );
};

export default JobOpputrunites;
