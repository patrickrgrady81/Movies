import React from 'react';


const MovieList = props => {


  if(props.movies[0]){
  return (
        <>
          {props.movies.map(movie => {
            return(
              <div key={movie.key}>
                <h1>{movie.movie}</h1>
              </div>
            );
          })}
        </>
  )
  } else
  { return(
    <h1>Loading...</h1>
  )
  }


};
export default MovieList;