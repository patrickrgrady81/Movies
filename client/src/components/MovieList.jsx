import React, { useState } from 'react';
import './MovieList.css';

const handleClick = () => {
  console.log("poster Clicked");
}

const MovieList = props => {

  if (props.movies){
    console.log(props.movies[0]);
    return(
      <>
        <ul className="noBullets">
          {props.movies.map(movie => {
            return(
              <div key={movie.id}>
                <div><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} onClick={handleClick}/></div>

                <li><h1>{movie.title}</h1></li>
                <li><h3>{movie.release_date}</h3></li>
                <li><p>{movie.overview}</p></li>

              </div>
          )})}
        </ul>
        {/* <h1>hi</h1> */}
      </>
    )} else {
      return(
        <>
          <h1>Loading...</h1>
        </>
      )
    }
};
export default MovieList;