import React  from 'react';

export default class Link extends React.Component {
  render(){
    return (
        <div>
            <h1>Your links</h1>
            <button onClick={()=>{this.props.history.push('/');}}>Log-out</button>
        </div>
    );  
  }
}