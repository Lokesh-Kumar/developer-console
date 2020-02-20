import React, { Component } from 'react';
import './AuthContainer.css'
import ThirdPartyAuthentication from './ThirdPartyAuthentication'
class AuthContainer extends Component{

     state = {
        isLoginOpen: true,
        userName : undefined,
        passWord : undefined,
        emailId : undefined,
        isEmailIdValid: undefined
      };

    toggleAuthContainer=()=>{
        this.setState((prevState) => {
            return {isLoginOpen: !prevState.isLoginOpen};
          });
    };
    submitLogin=(e)=>{
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.emailId)){
            console.log("yes");
        }
        console.log({emailId : this.state.emailId, passWord : this.state.passWord});
    }

    onUserNameChange= (event) => {
        console.log(event.target.value);
        this.setState({userName: event.target.value});
    }
    onEmailIdChange= (event) => {
        if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(event.target.value)){
            this.setState({emailId: event.target.value , isEmailIdValid: true});
        }else{  
            this.setState({isEmailIdValid: false});
        }
    }
    onPasswordChange= (event) => {
        this.setState({passWord: event.target.value});
    }
    render(){
        return(
            <div className="auth-container">
               <h1>Log in</h1>
                <div className='form-container'>
                   { this.state.isLoginOpen? 
                    <LoginContainer 
                            submitLogin={this.submitLogin}
                            onEmailIdChange={this.onEmailIdChange}
                            isEmailIdValid={this.state.isEmailIdValid}
                            onPasswordChange={this.onPasswordChange}
                            toggleAuthContainer={this.toggleAuthContainer}/> : 
                    <SignUpContainer
                            submitLogin={this.submitLogin}
                            onEmailIdChange={this.onEmailIdChange}
                            onPasswordChange={this.onPasswordChange}
                            onUserNameChange={this.onUserNameChange}
                            toggleAuthContainer={this.toggleAuthContainer}/>}
                </div>
                <ThirdPartyAuthentication/>
            </div>

        )
    }
}

const LoginContainer =(props)=> {

     return(   <div className="inner-container">
                  <div className='input-group'>
                    <input 
                        type="email" name="emailid"
                        className={props.isEmailIdValid? "login-input input-valid" : "login-input input-error"}
                        placeholder="Email Id "
                        onChange={props.onEmailIdChange}/>
                </div>


                <div className='input-group'>
                    <input 
                        type="password" 
                        name="password" 
                        className="login-input" 
                        placeholder="Password"
                        onChange={props.onPasswordChange}/>
                </div>

                <button  type='button' className='login-btn' onClick={props.submitLogin }>Login</button> 
                <a onClick={props.toggleAuthContainer}>No account? Signup</a>
            </div>
     );
    
}

const SignUpContainer =(props)=> {

       return ( <div className="inner-container">
                <div className='input-group'>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username"
                        className="login-input" 
                        placeholder="Username"
                        onChange={props.onUserNameChange}/>
                </div>

                <div className='input-group'>
                    <label htmlFor="emailid">Email Id</label>
                    <input 
                        type="email" name="emailid"
                        className="login-input"
                        placeholder="Email Id "
                        onChange={props.onEmailIdChange}/>
                </div>

                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        className="login-input" 
                        placeholder="Password"
                        onChange={props.onPasswordChange}/>
                </div>
                <button  type='button' className='login-btn' onClick={props.submitLogin}> Sign Up</button> 
                <a onClick={props.toggleAuthContainer}>Already a member? Login</a>
        </div>);
}

export default AuthContainer;

//https://www.mockplus.com/blog/post/login-page-examples nike example