import React from "react";
import styles from "./index.module.css";


export function ProgressBar(props){
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 20,
      width: '100%',
      backgroundColor: "var(--background-color)",
      borderRadius: 50,
      marginTop: 10
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      transition: 'width 1s ease-in-out',
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span className={styles.labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };

  export default ProgressBar;