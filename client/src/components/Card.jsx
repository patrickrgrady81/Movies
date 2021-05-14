import { useState } from 'react'
import './Card.css'

const Card = (props) => {
    const handleClick = () => {
        setClicked(!clicked)
        console.log("Poster Clicked " + props.title);




        // OPEN MODAL HERE
        // https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6








    }

    const [clicked, setClicked] = useState(false)

    if (!clicked){
      return(
        <div><img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} onClick={handleClick}/></div>
      )
    } else {
      return(
          <div onClick={handleClick} className="modal">
              <img src={`https://image.tmdb.org/t/p/original/${props.poster}`} alt={props.title} />
              <li><h1>{props.title}</h1></li>
              <li><h3>{props.date}</h3></li>
              <li><h4>{props.overview}</h4></li>
          </div>
      )
    }
}

export default Card