import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      Created By
      <i className="fa-solid fa-heart"></i>
      <a href="https://www.linkedin.com/in/shubham-patel-1aa397184/" target="_blank">
        Shubham
      </a>
      <i className="fa-solid fa-copyright"></i>2023
      <strong>
        Food<span>Fire</span>
      </strong>
    </div>
  )
}

export default Footer