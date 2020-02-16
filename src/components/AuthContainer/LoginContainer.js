import React,{Component} from 'react';
import './LoginContainer.css'

class LoginContainer extends Component {

    getInputData = (data) =>{
        console.log(data);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    authenticateUser(e){
        console.log(e);
    }
    render(){
        return (
            <div className="login-container">
                <form className="login-form">
                    <div className="nav-pills">
                      <span className="nav-pill active">Log in</span>
                      <span className="nav-pill">Sign up</span>
                    </div>
                    <h3>Log in to your account</h3>
                    <div className="form-group">
                        <input type="email" name="email" id="email-input" required/>
                        <label>E-mail</label>
                     </div>
                    <div className="form-group">
                     <input type="password" name="password" id="placeholder-input" required/>
                     <label>Password</label>
                     </div>
                     <button onClick = {this.authenticateUser.bind(this)} >Log in</button>
                    
                 </form>
             </div>
        )

    }
}


export default LoginContainer;