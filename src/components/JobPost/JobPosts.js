import React from 'react';
import './Jobpost.css';

const JobPosts = (props)=>{
 
    return (
        
      <div className="job-post">        
        <div className='profile-manager'>
          <img src={props.profileImage} alt="Profile" className="profile-image" />
          <div className='name-manager'>
            <h1 className="name">{props.name}</h1>
            <h2 className="position">{props.position}</h2>
          </div>
        </div>
        
        <p className="content">{props.content}</p>
        <div className='img-container'>
          <img src={props.attachments} className='content-image'></img>
        </div>
        
        <p className="timestamp">Posted on: {props.timeStamp}</p>
      </div>
    );
  }


export default JobPosts;