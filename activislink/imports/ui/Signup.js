import React  from 'react';
import { Link } from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base'

export default class Signup extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        error: '' 
      };
  }
  onSubmit(e){
      e.preventDefault();
      
      let email = this.refs.email.value.trim();
      let password = this.refs.password.value.trim();

      Accounts.createUser({email: email, password: password},(err)=>{
        console.log("Signup callback", err);
      });
  }
  render(){
    return (
      <div>
        <h1>Join ActivisLink</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <p>We are currently in open signups.</p>
        
        <form onSubmit={this.onSubmit.bind(this)}>
            <input type="email" ref="email" name="email" placeholder="Email"/>
            <input type="password" ref="password" name="password" placeholder="Password"/>
            <button>Create Account</button>
        </form>
        <Link to="/">Already have an account ?</Link>
      </div>
    );
  }
}