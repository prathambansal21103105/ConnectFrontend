import React, { useState } from 'react';
import Card from './SignInCard';
import { colors } from './Theme.js';
import styles from './LogSign.module.css';
import './SignInCard.css';
import Auth from '../../Auth';

import Dropdown from './DropDownSign.js'
import LogIn from './Login.js';
import Signup from './SignUp.js';
// import Navbar from '../../Navbar';

function SignIn() {
  const [username, setUsername] = useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword] = useState('');
  const [signupOpen,setSignUpOpen] = React.useState(true);
  const [dropdown, setDropDown] =React.useState(false);
  const [dropdownValue,setDropDownValue] = React.useState('Dropdown');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
  };
  const clickHandler=()=>{
    setSignUpOpen((prrevstate)=>{
      return !prrevstate;
    })
    dropDowHandler()
  }
  const dropDowHandler = ()=>{
    console.log("Hello World!")
    setDropDown((prevstate)=>{
      return !prevstate;
    })
  }
  const switchHandler = ()=>{
    setSignUpOpen(false);
  }
  const switchHandler2 = ()=>{
    setSignUpOpen(true);
  }
  
  return (
    <div>
            {/* <Navbar ></Navbar> */}
        <div className={styles.vasu}><Card className={styles.acard}>
        
        <div className= {styles.bttn}>
        <button className={styles.abc1}onClick={clickHandler} type='submit'>Sign Up</button>
        <button className={styles.abc1}onClick={clickHandler}  type='submit'>Login</button>
        </div>
        {/* <h2 style={{ textAlign: 'center', color: colors.white }}><b>Sign Up</b></h2> */}
        <br />
        <br />
        {!signupOpen && <div  onClick ={switchHandler}><LogIn></LogIn></div>}
        {signupOpen && <div onClick={switchHandler2}><Signup ></Signup></div>}

       <br></br>
        <div className={styles.social}>
        <a class={styles.social1} href="https://www.facebook.com"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" height="30px" width="30px"></img></a>
        <a class={styles.social1} href="https://mail.google.com/mail/u/0/#inbox"><Auth></Auth></a>
        <a class={styles.social1} href="https://www.linkedin.com/feed/"><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" height="30px" width="30px"></img></a>
        <a class={styles.social1} href="https://github.com/"><img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height="30px" width="30px"></img></a>
        </div>
      </Card>
      </div>
    </div>
  );
}

export default SignIn;