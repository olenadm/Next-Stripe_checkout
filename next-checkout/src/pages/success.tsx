import React from 'react'
import styles from "@/styles/Home.module.css";

export default function success() {
  return (
    <div className="py-5 text-center h-100">
    <h1 className={styles.h1}>
      Successful <span className="text-primary"> payment.</span>
    </h1>
    <p>Hooray!</p>
  </div>
  )
}
