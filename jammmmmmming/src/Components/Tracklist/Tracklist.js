import React, { useState } from "react";
import styles from './Tracklist.module.css';
import Track from "../Track/Track";

export default function Tracklist(props) {
    return (
        <div className={styles.Tracklist}>
          {props.userSearchResults.map((track) => (
            <Track
              track={track}
              key={track.id}
            />
          ))}
        </div>
    );
}