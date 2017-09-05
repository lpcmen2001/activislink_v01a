import React  from 'react';
import { Link } from 'react-router-dom';

export default class Signup extends React.Component {
  render(){
    return (
      <div>
        <h1>Join ActivisLink</h1>

        <p>Signup form here</p>
        
        <Link to="/">Already have an account ?</Link>
      </div>
    );
  }
}