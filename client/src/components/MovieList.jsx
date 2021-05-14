import React, { useState } from 'react';
import './MovieList.css';
import Card from './Card'




const MovieList = props => {

  const[max, setMax] = useState(4)

  const handleButtonLeft = () => {
    if (!(max < 5)){
      setMax(max - 1);
    }
  }

  const handleButtonRight = () => {
    if (!(max > 9)){
      setMax(max + 1);
    }
  }

  if (props.movies){
    return(
      <>
        <button onClick={handleButtonLeft}>&#60;  PREV </button>
        <ul className="noBullets flex-container" >
          {props.movies.map((movie, index) => {
            if (index <= max && index > max-5) {
            return(
                <div key={movie.id} >
                  <Card className="flex-item" title={movie.title} date={movie.release_date} overview={movie.overview} poster={movie.poster_path}/>
                </div>
          )}})}
        </ul>
        <button onClick={handleButtonRight}> NEXT  &#62; </button>
     </>
    )
    
  } else {
      return(
        <>
          <h1>Loading...</h1>
        </>
      )
    }
};
export default MovieList;