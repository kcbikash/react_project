import React, { Component } from 'react'

class StateExample extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome to react'
        }
    }
    changeMessage(){
        this.setState({  
            message:'Thank you for clicking button'
        })
    }
    render(){
       return (
           <div>
               {this.state.message}
               <button onClick={()=>this.changeMessage()}>Click Here</button>
           </div>
       )
    }
}

export default StateExample