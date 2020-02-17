import React, { Component } from 'react';
import './AuthContainer.css'
import ThirdPartyAuthentication from './ThirdPartyAuthentication'
class AuthContainer extends Component{

     state = {
        isLoginOpen: true,
        userName : undefined,
        passWord : undefined,
        emailId : undefined
      };

    toggleAuthContainer=()=>{
        this.setState((prevState) => {
            return {isLoginOpen: !prevState.isLoginOpen};
          });
    };
    submitLogin=(e)=>{
        console.log(e);
    }

   onUserNameChange= (event) => {
        console.log(event.target.value);
        this.setState({userName: event.target.value});
    }
    onEmailIdChange= (event) => {
        console.log(event.target.value);
        this.setState({emailId: event.target.value});
    }
    onPasswordChange= (event) => {
        this.setState({passWord: event.target.value});
    }
    render(){
        return(
            <div className="auth-container">
                <div className='auth-choice-container'>
                      <span className="nav-pill active" onClick={this.toggleAuthContainer}>Log in</span>
                      <span className="nav-pill" onClick={this.toggleAuthContainer}>Sign up</span>
                </div>
                <div className='form-container'>
                   { this.state.isLoginOpen? 
                    <LoginContainer 
                            submitLogin={this.submitLogin}
                            onEmailIdChange={this.onEmailIdChange}
                            onPasswordChange={this.onPasswordChange}/> : 
                    <SignUpContainer
                            submitLogin={this.submitLogin}
                            onEmailIdChange={this.onEmailIdChange}
                            onPasswordChange={this.onPasswordChange}
                            onUserNameChange={this.onUserNameChange}/>}
                </div>
                <ThirdPartyAuthentication/>
            </div>

        )
    }
}

const LoginContainer =(props)=> {

     return(   <div className="inner-container">
            <div className='box'>
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

                <button  type='button' className='login-btn' onClick={props.submitLogin}>Login</button> 
            </div>
        </div>
     );
    
}

const SignUpContainer =(props)=> {

       return ( <div className="inner-container">
            <div className='box'>
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
            </div>
        </div>);
}

export default AuthContainer;