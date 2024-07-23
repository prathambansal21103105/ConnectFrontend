import styles from "./LogSign.module.css";
import React from "react";
import { useState } from "react";
import { colors } from "./Theme.js";
const LogIn = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupOpen, setSignUpOpen] = React.useState(true);
  const [dropdown, setDropDown] = React.useState(false);
  const [dropdownValue, setDropDownValue] = React.useState("Dropdown");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
  };
  const clickHandler = () => {
    setSignUpOpen((prrevstate) => {
      return !prrevstate;
    });
    dropDowHandler();
  };
  const dropDowHandler = () => {
    console.log("Hello World!");
    setDropDown((prevstate) => {
      return !prevstate;
    });
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.user}>
        <b>Username</b>:{" "}
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: `1px solid ${colors.black}`,
            borderRadius: "4px",
            marginBottom: "20px",
            color: colors.black,
            backgroundColor: colors.white,
          }}
        />
      </label>
      
      <label className={styles.user}>
        <b>Password :</b>{" "}
        <input
          className={styles.pass2}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            border: `1px solid ${colors.black}`,
            borderRadius: "4px",
            marginBottom: "20px",
            color: colors.black,
            backgroundColor: colors.white,
          }}
        />
      </label>
    
      <button class={styles.abc} type="submit">
        <b>Log in</b>
      </button>
    </form>
  );
};
export default LogIn;