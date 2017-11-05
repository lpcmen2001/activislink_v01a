import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import { Session } from 'meteor/session';
import LinksListItem from './LinksListItem';

import FlipMove from 'react-flip-move';

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
        const allLinks = Links.find({
                visible: Session.get('showVisible')
        }).fetch();
        this.setState({links:allLinks});
        console.log ('All Links : ', allLinks);
        });

    }
    componentWillUnmount(){
        console.log("componentWillNumount LinksList");
        this.linksTracker.stop();
    }
    renderLinksListItems(){
        if (this.state.links.length < 1){
            return (
                <div className="item">
                    <p className="item__status-message">No links found</p>
                </div>
            );
        }
        return this.state.links.map((link)=>{
           const shortUrl = Meteor.absoluteUrl(link._id);
           return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>
        });
    }
    render(){
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderLinksListItems()}
                </FlipMove>
            </div>
        );
    }
}