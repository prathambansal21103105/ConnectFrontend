import JobPosts from "./JobPosts";
import LeftFeed from "../UI/LeftFeed";
import RightFeed from "../UI/RightFeed";
import useWindowSize from "../../useWindowSide";

const Posts = ()=>{
const size = useWindowSize();
const job = {
    profileImage:
      "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "John Wick",
    position: "Best Assasin ever known",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    attachments:
      "https://images.pexels.com/photos/2681319/pexels-photo-2681319.jpeg?auto=compress&cs=tinysrgb&w=600",
    timeStamp: "April 22, 2023",
};
    return (
        <div>
            <LeftFeed></LeftFeed>
            <JobPosts profileImage={job.profileImage} name={job.name} position={job.position} content={job.content} attachments={job.attachments} timeStamp={job.timeStamp} ></JobPosts>
            {size.width > 1350 && <RightFeed></RightFeed>}
            <JobPosts profileImage={job.profileImage} name={job.name} position={job.position} content={job.content} attachments={job.attachments} timeStamp={job.timeStamp} ></JobPosts>
            {size.width > 1350 && <RightFeed></RightFeed>}
        </div>
    );
}

export default Posts;