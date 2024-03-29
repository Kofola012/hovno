import React, { useState } from "react";
import styles from './SearchBar.module.css';

export default function SearchBar(props) {
    return (
        <div className={styles.SearchBar}>
            <input placeholder="Enter A Song, Album, or Artist"/>
            <button className={styles.SearchButton}>
                SEARCH
            </button>
      </div>
    );
}