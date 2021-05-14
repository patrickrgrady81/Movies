import React from 'react';
import './MovieList.css';


const MovieList = props => {

  if (props.movies){
    console.log(props.movies[0]);
    return(
      <>
        <ul className="noBullets">
          {props.movies.map(movie => {
            return(
              <div key={movie.id}>
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