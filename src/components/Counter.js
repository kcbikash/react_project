import React, { Component } from 'react'

class Counter extends Component{
    constructor(){
        super();
        
        this.state={
            counter:0
        }
    }

    increaseCounter(){
        // this.setState({ 
        //     counter:this.state.counter+1
        // },()=>{                                                     //callback function called after state changed
        //     console.log(this.state.counter)
        // });
        // console.log(this.state.counter)         ///call before state change.

        //previous value
        this.setState((prevState)=>({
            counter:prevState.counter+1
        }))
    }
    decrementCounter(){
        this.setState({counter:this.state.counter-1})
    }
    incrementByFive(){
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
        this.increaseCounter()
    }

    render(){
        return (
           <div> 
               {this.state.counter}
               {console.log(this.state.counter)}
               <button onClick={()=>this.incrementByFive()}>Increment</button>
               <button onClick={()=>this.decrementCounter()}>Decrement</button>
           </div>
        );
    }
}

export default Counter