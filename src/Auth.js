// import React, { useState } from 'react';
// import { auth } from "@firebase";
import { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
// import { initializeApp } from "@firebase/app";
// import { getAuth, GoogleAuthProvider } from "@firebase/auth";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const google = window.google
function Auth() {
    
    const [user , setUser] = useState({})

    function handleCallbackResponse(response)
    {
        console.log("Encoded JWT ID Token: " + response.credentials);
        var userObject = jwt_decode(response.credential);
        console.log(userObject);
        setUser(userObject)
        document.getElementById("signInDiv").hidden=true;
    }

    function handleSignOut(event)
    {
        setUser({});
        document.getElementById("signInDiv").hidden=false;
    }

    useEffect(()=>{

        google.accounts.id.initialize({
            client_id:"655702671199-07esiubscmrujnpu16srmu5bp1h4srbi.apps.googleusercontent.com",
            callback: handleCallbackResponse
        });
        
        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline", size:"large"}
        );

        google.accounts.id.prompt();
    },[])
  return (
    <div>
      <div id="signInDiv"></div>
      {
        Object.keys(user).length !== 0 &&
        <button onClick={(e)=> handleSignOut(e)}>Sign Out</button>
      }
      
      
      {
        user && 
        <div>
            {/* <img src={user.picture}>
                <h1>{user.name}</h1>
            </img> */}
            <h1>{user.name}</h1>
        </div>
      }
    </div>
  );
}

export default Auth;