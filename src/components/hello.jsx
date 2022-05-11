import React from 'react'
import {useParams} from 'react-router-dom'

function Hello() {
    const {string} = useParams();

    if(isNaN(+`${string}`)) {
        // console.log(isNaN(+`${string}`));
        return(
            <>
                <h1>The word is: {string}</h1>
            </>
        )
    }
    else {
        return(
            <>
                <h1>The number is: {string}</h1>
            </>

        )
    }
    
}

export default Hello