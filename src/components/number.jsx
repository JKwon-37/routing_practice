import React from 'react'
import {useParams} from 'react-router-dom'

function Number() {
    // const navigate = useNavigate();
    const {number} = useParams();


  return (
    <div>
    <h1>The word is {isNaN(+`${number}`)}!</h1>
    {console.log((isNaN(+`${number}`)))}
</div>
  )
}

export default Number