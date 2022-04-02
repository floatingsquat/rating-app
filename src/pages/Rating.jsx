import { useState, useContext } from 'react';
import First from '../components/First'
import Second from '../components/Second'
import RatingContext from '../context/RatingContext';

function Rating() {
  
  const {active, setActive} = useContext(RatingContext)

  return (
    <div className="container">

  {active === 1 ? <First /> : <Second /> }
       
    </div>
  )
}

export default Rating