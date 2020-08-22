import React from 'react'

const PropExample=(props)=>{
    console.log(props)
return <div>
   <h1>props example {props.name} {props.address}</h1>
<h3>{props.children}</h3>
</div>
}
export default PropExample