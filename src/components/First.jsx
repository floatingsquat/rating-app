import { useContext, useState } from 'react'
import img from '../assets/icon-star.svg'
import RatingContext from '../context/RatingContext';

function First() {

    
    const {active, setActive, rating, setRating} = useContext(RatingContext)
    
    const onSubmit = (() => {
        setActive(2)
        console.log("rqr")
    })
  return (
    <>
     <div className="star-icon">
        <img src={img} />
        </div>
        <div className="info">
            <h3>How did we do?</h3>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <div className="rating">
        <button onClick={() => setRating(1)} className={rating === 1 && 'activated'}>1</button>
        <button onClick={() => setRating(2)} className={rating === 2 && 'activated'}>2</button>
        <button onClick={() => setRating(3)} className={rating === 3 && 'activated'}>3</button>
        <button onClick={() => setRating(4)} className={rating === 4 && 'activated'}>4</button>
        <button onClick={() => setRating(5)} className={rating === 5 && 'activated'}>5</button>
        </div>
        <button onClick={() => onSubmit(rating)} className="submit">Submit</button>
    </>
  )
}

export default First