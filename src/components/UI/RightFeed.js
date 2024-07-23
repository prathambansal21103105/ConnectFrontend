import React from "react";
import RightFeedCard from './RightFeedCard';
import './RightFeed.css'
const RightFeed =(props)=>{
    return (
        <div className="praan">
            <div>
            <h1>Top Social Sector News</h1>
            </div>
            <RightFeedCard title={"NEW NGO"}></RightFeedCard>
            <RightFeedCard title={"Donation Worth 2cr"}></RightFeedCard>
            
        </div>
    );
}
export default RightFeed;