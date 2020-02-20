import React,{Component} from 'react';

class ThirdPartyAuthentication extends Component{

    render(){
        return(
            <GoogleAuthContainer/>
        );
    }
}

const GoogleAuthContainer =(props)=> {
        return(
            <div>Login with google</div>

        );
}
export default ThirdPartyAuthentication;