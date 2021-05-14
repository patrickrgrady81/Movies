import { useState } from 'react'
import './Card.css'

const Card = (props) => {
    const handleClick = () => {
        setClicked(!clicked)
        console.log("Poster Clicked " + props.title);
    }

    const [clicked, setClicked] = useState(false)

    if (!clicked){
      return(
        <div><img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} onClick={handleClick}/></div>
      )
    } else {
      return(
          <div onClick={handleClick} className="add-border">
              {/* <div><img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} onClick={handleClick}/></div> */}
              <li><h1>{props.title}</h1></li>
              <li><h3>{props.date}</h3></li>
              <li><p>{props.overview}</p></li>
          </div>
      )
    }
}

export default Card