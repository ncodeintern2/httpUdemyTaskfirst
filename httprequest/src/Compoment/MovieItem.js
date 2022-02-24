import React from 'react'
import classes from './MovieItem.module.css'
const MovieItem =(props) => {
  return (
    <div className={classes.items}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.moviedata}>
            <p>{props.openingText}</p>
            {props.releaseDate}
        </div>             

  
    </div>
  );
}

export default MovieItem;
