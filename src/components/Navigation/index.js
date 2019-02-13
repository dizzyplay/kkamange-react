import React from 'react';
import UserInfo from 'components/UserInfo';
import styles from './styles.scss'

const Navigation = ()=>(
  <div className={styles.topNavigation}>
    <UserInfo/>
  </div>
);

export default Navigation;