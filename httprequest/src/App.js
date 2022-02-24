import React, { useCallback, useEffect, useState } from 'react'
import MovieList from './Compoment/Movielist';
import classes from './Compoment/MovieList.module.css'
import AddMovie from './Compoment/AddMovie';
function App() {
  const [movie, setMovie] = useState([])
  const [isLoding, setIsLoding] = useState(false)
  const [error, setError] = useState(null)


  // const fatchMovieHander =() =>{

  //   fetch('https://swapi.dev/api/films/').then((response) =>{
  //     return response.json()
  //   }).then((data) =>{
  //     const transforemal_data =data.results.map((moviedata)=>{
  //       return (
  //         {
  //           id:moviedata.episode_id,
  //           title: moviedata.title,
  //           openingText:moviedata.opening_crawl,
  //           releaseDate:moviedata.release_date,
  //         }
  //       )

  //     })
  //     setMovie(transforemal_data)


  //   })
  // }

  let content = <p>No Movie</p>

  if(isLoding){
    content =<p>Loding ......</p>
  }

  if (error){
    content =<p>{error}</p>
  }
  if(movie.length >0){
    content = <MovieList dummyMovies={movie}/>

  }
  // useEffect( () =>{fatchMovieHander();},[])


  const fatchMovieHander = useCallback(async () => {
    setIsLoding(true)
    setError(null)

    try {
      const response = await fetch('https://swapi.dev/api/films/', { method: 'GET' });
      if(!response.ok){
        throw new Error("Mistake");
      }
      const data = await response.json();
      

      const transforemal_data = data.results.map((moviedata) => {
        return (
          {
            id: moviedata.episode_id,
            title: moviedata.title,
            openingText: moviedata.opening_crawl,
            releaseDate: moviedata.release_date,
          }
        )

      })
      setMovie(transforemal_data)


    } catch (error) {
      setError(error.message)
    }
    setIsLoding(false)
  },[])
  // useEffect(() =>{ fatchMovieHander()},[fatchMovieHander])



  return (
    <React.Fragment >
      <section>
        <AddMovie/>
      </section>
      <section>
        <button onClick={fatchMovieHander} >Fetch Movie</button>
      </section>
      <section className={classes.data}>
        {/* {!isLoding && movie.length > 0 &&  <MovieList dummyMovies={movie}/>}
        {!isLoding && movie.length === 0 && !error && <p>No Movie Found</p>}
        {!isLoding && error && <p>{error}</p>}
        {isLoding && <p>Loding ......</p>} */}

        {content}
      </section>



    </React.Fragment>
  );
}

export default App;
