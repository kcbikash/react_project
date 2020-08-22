import React from 'react'
import './style.css'

const mycustCss={
    color:'red'
}
function StyleSheet(props){
    let greenColorCss=props.greenColor?'greenColor':''
   
    return(
        <div>
            <h1 className={`${greenColorCss} font-xl`}>This world</h1>
            <p style={mycustCss}>Test yellow inline css</p>
        </div>
    )
}

export default StyleSheet