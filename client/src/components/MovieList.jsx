import React, { useState } from 'react';
import './MovieList.css';
import Card from './Card'




const MovieList = props => {

  if (props.movies){
    return(
      <>
        <ul className="noBullets">
          {props.movies.map(movie => {
            return(
              <div key={movie.id}>
                <Card title={movie.title} date={movie.release_date} overview={movie.overview} poster={movie.poster_path}/>
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