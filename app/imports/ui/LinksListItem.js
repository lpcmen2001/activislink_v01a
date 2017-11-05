import React from 'react';
import {Meteor} from 'meteor/meteor';
import Clipboard from 'clipboard';
import moment from 'moment';

export default class LinksListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            justCopied: false
        };
    }
    componentDidMount() {
        this.props.captions = 'Copy';
        this.clipboard = new Clipboard(this.refs.copy);
        this.clipboard.on('success', ()=>{
            this.setState({justCopied: true});
            Meteor.setTimeout(()=>{this.setState({justCopied : false});}, 1000);
            //alert('It Worked!');
        }).on('error', ()=>{
            alert('Error!');
        });
    }
    componentWillUnmount(){
        this.clipboard.destroy();
    }
    getButtonText(){
        if (this.state.justCopied){
            return 'Copied';
        }else {
            return 'Copy';
        }
    }
    renderStats(){
        const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage  = null;
        if (typeof this.props.lastVisitedAt === 'number'){
            let myDelayMsg = moment(this.props.lastVisitedAt).fromNow();
            visitedMessage =  '- (visited ' + myDelayMsg + ')';
        }
        return <p className="item__message">{this.props.visitedCount} {visitMessage} {visitedMessage}</p>;
    }
    render(){
        return (
            <div className="item">
                <h2>{this.props.url}</h2>
                <p className="item__message">{this.props.shortUrl}</p>
                {this.renderStats()}
                <a className="button button--link button--pill" href={this.props.shortUrl} target="_blank">
                    Visit
                </a>
                <button className="button button--pill" ref="copy" data-clipboard-text={this.props.shortUrl}>{this.getButtonText()}</button>
                <button className="button button--pill" onClick={()=>{Meteor.call('links.setVisibility',this.props._id, !this.props.visible)}}>
                    {this.props.visible ? 'Hide' : 'UnHide'}
                </button>
            </div>
        );
    }
}

LinksListItem.propTypes = {
    _id: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    visible: React.PropTypes.bool.isRequired,
    userId: React.PropTypes.string.isRequired,
    shortUrl: React.PropTypes.string.isRequired,
    visitedCount: React.PropTypes.number.isRequired,
    lastVisitedAt: React.PropTypes.number
};