import React from 'react'
import UserInfo from 'components/UserInfo';
import styles from './styles.scss'

export function Navigation(props){
  return(
      <div className={styles.topNavigation}>
        <UserInfo/>
        <button onClick={props.handleLogout}>logout</button>
      </div>
  )
}

