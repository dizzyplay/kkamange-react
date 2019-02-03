import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.scss'

const Footer = (props, context)=> {
  return (
    <footer className={styles.footer}>
      <div className={styles.column}>
        <span className={styles.copyright}>Copyright 2018 kkamange</span>
      </div>
      <div className={styles.column}>
        <nav className={styles.nav}>
          <ul className={styles.list}>
            <li className={styles.listItem}>{context.t("About us")}</li>
            <li className={styles.listItem}>{context.t("Privacy")}</li>
            <li className={styles.listItem}>{context.t("Terms")}</li>
          </ul>
        </nav>
      </div>
    </footer>
  )
};
Footer.contextTypes = {
  t: PropTypes.func.isRequired,
};

export default Footer;