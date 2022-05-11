import React from 'react'
import {useParams} from 'react-router-dom'

function Hello() {
    const {string, color1, color2} = useParams();

    if(isNaN(+`${string}`)) {
        // console.log(isNaN(+`${string}`));
        return(
            <>
                <h1 style={{color:`${color1}`, backgroundColor:`${color2}`}}>The word is: {string}</h1>
            </>
        )
    }
    else {
        return(
            <>
                <h1 style={{color:`${color1}`, backgroundColor:`${color2}`}}>The number is: {string}</h1>
            </>

        )
    }
    
    
}

export default Hello