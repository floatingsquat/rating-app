import { createContext, useState} from "react"


const RatingContext = createContext();

export const RatingProvider = ({children}) => {
    const [active, setActive] = useState(1);
    const [rating, setRating] = useState(5);


    return <RatingContext.Provider value={{
    active,
    setActive,
    rating,
    setRating,
    }}>  
    {children}
    </RatingContext.Provider>
}


export default RatingContext