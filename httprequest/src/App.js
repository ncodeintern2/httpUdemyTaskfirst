import React, { useState, useEffect, useCallback } from 'react';
import MovieList from './Compoment/Movielist';
import classes from './Compoment/MovieList.module.css'
import AddMovie from './Compoment/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-f2a37-default-rtdb.firebaseio.com/movie.json', {
        method: 'Get'
      });
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data)
      const loadedMovie = []
      for (const key in data) {
        loadedMovie.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,

        })



      }
      setMovies(loadedMovie);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }

  // useEffect(() => {
  //   fetchMoviesHandler();
  // },[fetchMoviesHandler]);

  const addMovieHandler = async (movie) => {
    const response = await fetch('https://react-http-f2a37-default-rtdb.firebaseio.com/movie.json', {
      method: 'Post',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data)
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MovieList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;



// import React, { useCallback, useEffect, useState } from 'react'
// import MovieList from './Compoment/Movielist';
// import classes from './Compoment/MovieList.module.css'
// import AddMovie from './Compoment/AddMovie';
// function App() {
//   const [movie, setMovie] = useState([])
//   const [isLoding, setIsLoding] = useState(false)
//   const [error, setError] = useState(null)


//   // const fatchMovieHander =() =>{

//   //   fetch('https://swapi.dev/api/films/').then((response) =>{
//   //     return response.json()
//   //   }).then((data) =>{
//   //     const transforemal_data =data.results.map((moviedata)=>{
//   //       return (
//   //         {
//   //           id:moviedata.episode_id,
//   //           title: moviedata.title,
//   //           openingText:moviedata.opening_crawl,
//   //           releaseDate:moviedata.release_date,
//   //         }
//   //       )

//   //     })
//   //     setMovie(transforemal_data)


//   //   })
//   // }
//   const AddMovie =(movie) =>{

//       console.log(movie)


//   }

//   let content = <p>No Movie</p>

//   if(isLoding){
//     content =<p>Loding ......</p>
//   }

//   if (error){
//     content =<p>{error}</p>
//   }
//   if(movie.length >0){
//     content = <MovieList dummyMovies={movie}/>

//   }
//   // useEffect( () =>{fatchMovieHander();},[])
//   // const AddMovie =(movie)=>{
//   //   console.log(movie)

//   // }


//   const fatchMovieHander = useCallback(async () => {
//     setIsLoding(true)
//     setError(null)

//     try {
//       const response = await fetch('https://swapi.dev/api/films/', { method: 'GET' });
//       if(!response.ok){
//         throw new Error("Mistake");
//       }
//       const data = await response.json();


//       const transforemal_data = data.results.map((moviedata) => {
//         return (
//           {
//             id: moviedata.episode_id,
//             title: moviedata.title,
//             openingText: moviedata.opening_crawl,
//             releaseDate: moviedata.release_date,
//           }
//         )

//       })
//       setMovie(transforemal_data)


//     } catch (error) {
//       setError(error.message)
//     }
//     setIsLoding(false)
//   },[])
//   // useEffect(() =>{ fatchMovieHander()},[fatchMovieHander])



//   return (
//     <React.Fragment >
//       <section>
//         <AddMovie  onAddMovie={AddMovie}/>
//       </section>
//       <section>
//         <button onClick={fatchMovieHander} >Fetch Movie</button>
//       </section>
//       <section className={classes.data}>
//         {/* {!isLoding && movie.length > 0 &&  <MovieList dummyMovies={movie}/>}
//         {!isLoding && movie.length === 0 && !error && <p>No Movie Found</p>}
//         {!isLoding && error && <p>{error}</p>}
//         {isLoding && <p>Loding ......</p>} */}

//         {content}
//       </section>



//     </React.Fragment>
//   );
// }

// export default App;
