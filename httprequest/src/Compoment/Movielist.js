import React from 'react'
import MovieItem from './MovieItem';
import classes from './MovieList.module.css'
const MovieList =(props) =>{
  console.log("Child render")

  return (
    <ul className={classes.list}>
        {props.movies.map( (movie,key)=>{
            return (
                <MovieItem key={movie.id} id={movie.id} title ={movie.title} openingText={movie.openingText} releaseDate={movie.releaseDate}/>
            )
            
        })}
    </ul>
  );
}

export default MovieList;
