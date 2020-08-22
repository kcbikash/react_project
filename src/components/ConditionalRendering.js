import React, { Component } from 'react'

class ConditionalRendering extends Component{
    constructor(props){
        super(props)
        this.state={
            isLogin:true
        }
    }

    render(){

        //fourth method
 
        return (
            this.state.isLogin && <div>Logined</div>
        )

        //third method
        // return(
        //     this.state.isLogin?<div>Logined</div> :
        //     <div>Not Login</div>
        // )

     //second method
    //     let message
    //     if(this.state.isLogin){
    //         message=`Logined ${this.state.isLogin}`
    //     }else{
    //         message="Logined"
    //     }

    // return <div>{message}</div>

    // First method
        // if(this.state.isLogin){
        //     return <div>Logined</div>
        // }else{
        //     return <div>Not Loging</div>
        // }
    }

}

export default ConditionalRendering