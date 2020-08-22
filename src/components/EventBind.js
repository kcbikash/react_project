import React, { Component } from 'react'

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
          message:'hello'
        }
       // this.clickHandler=this.clickHandler.bind(this)
    }

    //  clickHandler() {
    //     this.setState({
    //         message:'GoodBye'
    //     })
    //     console.log(this)
    // }

    clickHandler=()=>{
        this.setState({
            message:'Good bye'
        })
    }



    render() {
        return (
        <div>{this.state.message}
             {/* <button onClick={this.clickHandler.bind(this)}>EventBind</button> */}
             {/* <button onClick={()=>this.clickHandler()}>EventBind</button> */}
             <button onClick={this.clickHandler}>Event Bind</button>
             </div>
        );
    }
}

export default EventBind