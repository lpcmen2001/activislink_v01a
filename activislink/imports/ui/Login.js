import React  from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render(){
    return (
      <div>
        <h1>Login to AcitvisLink</h1>

        <p>login form here</p>
        
        <Link to="/signup">Don't have an account ?</Link>
      </div>
    );
  }
}