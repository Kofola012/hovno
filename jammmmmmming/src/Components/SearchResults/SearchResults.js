import React, { useState } from "react";
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";

export default function SearchResults(props) {
    return (
        <div className={styles.SearchResults}>
            <Tracklist userSearchResults={props.userSearchResults} />
        </div>
    );
}