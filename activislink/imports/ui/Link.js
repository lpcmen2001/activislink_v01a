import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links';
import LinksList from './LinksList';

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
  onSubmit(e){
    const url = this.refs.url.value.trim();
    e.preventDefault();
    if (url){
        Links.insert({url : url});
        this.refs.url.value = '';
    }
  }
  render(){
    return (
        <div>
            <h1>Your links</h1>
            <button onClick={this.onLogout.bind(this)}>Log-out</button>
            <p>add link</p>
            <LinksList/>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text' ref='url' placeholder="URL"/>
                <button>Add link</button>
            </form>
        </div>
    );  
  }
}