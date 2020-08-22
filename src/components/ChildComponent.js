import React from 'react'

function ChildComponent(props) {
    return (
        <div>
              {/* <button onClick={props.greetHandler}>Greet Parent</button> */}   {/* calling parent greetHandler  */}
              <button onClick={()=>props.greetHandler("child")}>Greet Parent</button>   {/*//passing value from child to parent */}
        </div>
    )
}

export default ChildComponent