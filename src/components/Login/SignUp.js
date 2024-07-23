import { colors } from "./Theme.js";
import React from "react";
import { useState } from "react";
import Dropdown from "./DropDownSign.js";
import styles from "./LogSign.module.css";
const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Username: ${username}\nPassword: ${password}`);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signupOpen, setSignUpOpen] = React.useState(true);
  const [dropdown, setDropDown] = React.useState(false);
  const [dropdownValue, setDropDownValue] = React.useState("Dropdown");
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.user}>
        <b>Name</b>:{" "}
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
        <b>Email</b>:{" "}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
        <b>Pass</b>:{" "}
        <input
          className="pass"
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
      <div className={styles.posdown}>
        <h2 className={styles.position}>Select position:</h2>
        
        <div className={styles.dropdown}>
          <Dropdown></Dropdown>
        </div>
      </div>
      <button className={styles.abc} type="submit">
        <b>Sign Up</b>
      </button>
    </form>
  );
};
export default Signup;