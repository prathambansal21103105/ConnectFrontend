import React from 'react';
import styles from './HomePage.module.css'; 
import Main from './Main';

import Footer from './Footer';

const HomePage = () => {
  return (
    <div className={styles.App}>
      <Main />
    </div>
  );
};

export default HomePage;
