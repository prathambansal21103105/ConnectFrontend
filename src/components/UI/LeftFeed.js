import "./LeftFeed.css";
import { useState } from "react";
import useWindowSize from "../../useWindowSide";
import { Link } from "react-router-dom";

const LeftFeed = (props) => {
  const [showFeed, setShowFeed] = useState(true);
  const handleClick = () => {
    setShowFeed((prevState) => {
      return !prevState;
    });
  };
  let size = useWindowSize();
  let [once, setOnce] = useState(false);
  // let [two,setTwo] = useState(false);
  // let [phoneView, setPhoneView] = useState(false);
  if (!once && size.width <= 768) {
    console.log("hello there");
    setOnce(true);
    setShowFeed(false);
  }
  return (
    <div>
      {/* <h1 className="main-logo">Connect</h1> */}
      <div className="feed-manage">
        <div className="ad">
          {!showFeed && (
            <div className="menu-button" onClick={() => handleClick()}>
              <img src="https://github.com/Vasugarg2211/Images/blob/main/icons8-menu-squared-50.png?raw=true"></img>
            </div>
          )}
          {showFeed && (
            <div>
              {showFeed && size.width <= 768 && (
                <div onClick={() => handleClick()}>
                  <img src="https://github.com/Vasugarg2211/Images/blob/main/icons8-back-30%20(1).png?raw=true"></img>
                </div>
              )}
              <div className="feed-left">
                <ul>
                  <li>
                    <h3><Link style={{textDecoration:'none',color:'black'}} to="/addlisting">List an opening </Link></h3>
                  </li>
                  <li>
                    <h3><Link style={{textDecoration:'none',color:'black'}} to="/eventlisting">List an event </Link></h3>
                  </li>
                  <li>
                    <h3><Link style={{textDecoration:'none',color:'black'}} to="#">Compose</Link>
                    
                    </h3>
                  </li>
                  
                </ul>
              </div>
            </div>
          )}
        </div>

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
};

export default LeftFeed;
