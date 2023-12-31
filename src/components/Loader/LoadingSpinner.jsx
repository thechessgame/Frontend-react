import React from "react";
import classes from './loadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={classes["spinner-container"]}>
            <div className={classes["loading-spinner"]}></div>
        </div>
    );
}

export default LoadingSpinner;