import React  from 'react';
import { Link } from 'react-router-dom';
import  { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        error: '' 
      };
  }
  componentDidMount(){
    if (Meteor.userId()){
      this.props.history.replace('/links');
    }
  };
  onSubmit(e){
    e.preventDefault();
    
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();
    Meteor.loginWithPassword({email},password,(err)=>{
        if (err){
            this.setState({error: "Unable to login, check email and password."});
        }else{
            this.setState({error: ''});
        }
    });

  }
  render(){
    return (
      <div className="boxed-view">
        <div className="boxed-view__box">
          <h1>ActivisLink</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <form onSubmit={this.onSubmit.bind(this)} className="boxed-view__form">
              <input type="email" ref="email" name="email" placeholder="Email"/>
              <input type="password" ref="password" name="password" placeholder="Password"/>
              <button className="button">Login</button>
          </form>
          <Link to="/signup">Don't have an account ?</Link>
        </div>
      </div>
    );
  }
}