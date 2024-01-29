import React from 'react';
import styles from "@/styles/Home.module.css";


export default function error() {
  return (
    <div className="py-5 text-center">
    <h1 className={styles.h1}>
      Ooops... <span className="text-primary"> it's an error.</span>
    </h1>
    <p>This happens sometimes</p>
  </div>
  )
}
