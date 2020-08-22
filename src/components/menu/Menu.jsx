import React from 'react'
import { Link } from 'react-router-dom'

function menu(){
    return(
        <>
            <Link  to="/">Home</Link>
            <Link to="/contact">Contact</Link>
        
        </>
    )
}

export default menu