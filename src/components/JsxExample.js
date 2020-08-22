import React from 'react'

const Hello=()=>{
    // return(
    //     <div><h1>My test.</h1></div>
    // )
    // return (
    //     React.createElement('div',null,'testings')
    // )

    // return (
    //     React.createElement('div',{id:'testId',className:'testClass'},'testings')
    // )

       return (
        React.createElement('div',null,React.createElement('h1',null,"my testings"))
    )
}

export default Hello