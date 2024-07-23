import './SideBar.css';
// import {useState} from "react";

const SideBar = (props) => {    
    let showFeed = true;
    // const [showFeed, setShowFeed] = useState(true);
    // const handleClick = () => {
    //     setShowFeed((prevState) => {
    //         return !prevState;
    //     })
    // };
    
    return (
        <div>
            {/* <h1 className="main-logo">Connect</h1> */}
            <div className='feed-manage'>
                {/* <div className="menu-button" onClick={handleClick}><h2>Menu</h2></div> */}
                {showFeed && <div className="feed-left">
                    <ul>
                        <li><h3>Home</h3></li>
                        <li><h3>Explore</h3></li>
                        <li><h3>Notifications</h3></li>
                        <li><h3>Messages</h3></li>
                        <li><h3>Bookmarks</h3></li>
                        <li><h3>Profile</h3></li>
                    </ul>
                </div>} 
                
                {/* <div className="feed-main">
                    <div className="temp">
                        <img src={props.image} className='image-size' alt="NA"/>
                        <h2>{props.name}</h2>
                        <h6>{props.position}</h6>
                        <p>{props.content}</p>
                        <img src="{props.attachments}" alt="NA" />
                        <h3>{props.time}</h3>
                    </div>
                </div> */}
            </div>    
        </div>
    );
}
 
export default SideBar;