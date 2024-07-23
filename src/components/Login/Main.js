import SignIn from "./SignIn";
// import Signup from "./SignIn"
import styles from './HomePage.module.css'
const Main = () => {
    return (
      <main>
       
        <section className={styles.postsection}>
          
          <div className={styles.postfeed}>
            {/* Render posts here */}
            <div className={styles.postvasu}>
              <div className={styles.postheader}>
                <img src="https://github.com/Vasugarg2211/Images/blob/main/hero-img1.png?raw=true" alt="Post Author" />
                <SignIn></SignIn>
            </div>
          </div>
          </div>
        </section>
      </main>
    );
  };
  
  export default Main;