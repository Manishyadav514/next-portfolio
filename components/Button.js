import React from 'react'
import styles from '../styles/Button.module.css'

export const ButtonBlack = (props) => {
  return (
    <div className={`${styles["btn"]} ${styles["btn_black"]}`}>{props.title}</div>
  )
}

export const ButtonWhite = (props) => {
    return (
      <div className={`${styles["btn"]} ${styles["btn_white"]}`}>{props.title}</div>
    )
  }