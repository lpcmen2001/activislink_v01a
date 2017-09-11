import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';

export default class LinksList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            links: []
        };
    }
    componentDidMount(){
        console.log("componentDidMount LinksList")

        this.linksTracker = Tracker.autorun(()=>{
        Meteor.subscribe('links');
        const allLinks = Links.find().fetch();
        this.setState({links:allLinks});
        console.log ('All Links : ', allLinks);
        });

    }
    componentWillUnmount(){
        console.log("componentWillNumount LinksList");
        this.linksTracker.stop();
    }
    renderLinksListItems(){
        return this.state.links.map((link)=>{
            return <p key={link._id}>{link.url}</p>;
        });
    }
    render(){
        return (
            <div>
                <p>LinksList</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}