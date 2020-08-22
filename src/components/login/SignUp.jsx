import React, {Component} from 'react'
import { Link } from 'react-router-dom'


//for background color
document.body.style = 'background: white;';


class Registeruser extends Component{

   constructor(props){
       super(props)
       this.state={
           email:'',
           password:'',
           clicked: false
       }
   }

   validate=()=>{
       let isValidEmail=this.validateEmail(this.state.email)
       let isValidPassword=this.validatePassword(this.state.password)
       if(!isValidEmail){
        alert("Enter valid email");
        return;
       }
       if(!isValidPassword){
        alert("Enter valid password");
        return;
       }
    if(isValidEmail && isValidPassword )  {
      //  console.log("valid"),
       
    }else{
        alert("Incorrect email or password");
        return;
    }
  
   }
   validateEmail(inputEmail){
       return (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(inputEmail));

   }
   validatePassword(inputPassword){
        console.log(inputPassword)
       if((inputPassword.length<8) ){
           return false
       }

       return true
   }

   handleSubmit=(event)=>{
       event.preventDefault();
       console.log(this.state.email)
       const isValid=this.validate()
       return true

   }

    handleEmailChange=event=>{
        this.setState({
            email:event.target.value
        })
    }

    handlePasswordChange=event=>{
        this.setState({
            password:event.target.value
        })
    }
    render(){
        return(
            <div style={{height: '60%',width:'30%',backgroundColor: "green",
            float:"left", position: 'absolute', left: '70%', top: '50%',
            transform: 'translate(-50%, -50%)',borderRadius: '20px'}}>
              <form onSubmit={this.handleSubmit}>

                <div className='sign-in-title'>Sign Up</div>

                <div  className='rowC' style={{paddingTop:'25px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'52px',color:'white',fontSize:'25px'}}><label>Email</label></div>
                    <div><input value={this.state.email} onChange={this.handleEmailChange}  placeholder='Email' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                </div>

               
                <div  className='rowC' style={{paddingTop:'20px', justifyContent: 'center'}}>
                    <div style={{paddingRight:'10px',color:'white',fontSize:'25px'}}><label>Password</label></div>
                    <div><input type='password' value={this.state.password} onChange={this.handlePasswordChange}  placeholder='Password' style={{ paddingLeft:'10px',borderRadius: '20px',height: '50px',outline:'none'}} required/> </div>

                 </div>
                 <div className='submit-button'>
                
            <Link to="/loginpage"> <button className="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg"
                     >

                   SignUp
             </button>
             </Link>
             
                 </div>
                
                </form>
             
        
 
            </div>
            
        )
    }
}

export default Registeruser