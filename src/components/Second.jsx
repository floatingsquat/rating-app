import {useContext} from 'react'
import thanks from '../assets/illustration-thank-you.svg'
import RatingContext from '../context/RatingContext'
function Second() {
    
    const {rating} = useContext(RatingContext)

  return (
    <div className="done">
    <img src={thanks} />
    <h5>You selected {rating} out of 5</h5>
    <h3>Thank You!</h3>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}

export default Second