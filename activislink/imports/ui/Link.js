import React  from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class Link extends React.Component {
  componentDidMount(){
    if (!Meteor.userId()){
      this.props.history.replace('/');
    }
  };
  onLogout(){
      Accounts.logout();
      console.log("Logged out");
  }
  render(){
    return (
        <div>
            <h1>Your links</h1>
            <button onClick={this.onLogout.bind(this)}>Log-out</button>
        </div>
    );  
  }
}