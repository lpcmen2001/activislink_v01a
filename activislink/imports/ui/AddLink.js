import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export default class AddLink extends React.Component {
  componentDidMount(){
    if (!Meteor.userId()){
      this.props.history.replace('/');
    }
  };
  onSubmit(e){
    const url = this.refs.url.value.trim();
    e.preventDefault();
    if (url){
        Meteor.call('links.insert',url);
        this.refs.url.value = '';
    }
  }
  render(){
    return (
        <div>
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type='text' ref='url' placeholder="URL"/>
                <button>Add link</button>
            </form>
        </div>
    );  
  }
}