import React from "react";
import './RightFeedCard.css'
const RightFeedCard = (props)=>{
    return (
        <div className="outercon">
            <div>
                <h2><a style={{textDecoration:'none',color:"black", cursor:"pointer"}} href={props.url}>{props.title}</a></h2>
            </div>
            <hr></hr>
        </div>
    );
}
export default RightFeedCard;