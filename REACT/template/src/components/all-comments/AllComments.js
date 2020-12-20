import React, {Component} from 'react';
import {CommentsService} from "../services/CommentsService";
import Comment from "../comments/Comment";
import FullComment from "../full-comment/FullComment";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";



class AllComments extends Component {
    state = {comments: []}
    commentsService = new CommentsService()

    async componentDidMount() {
        let comments = await this.commentsService.getAllComments()
        this.setState({comments})
    }
    render() {
        let {comments} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {comments.map(value => <Comment key={value.id} item={value}/>)}
                <hr/>
                <Switch>
                    <Route path={'/comments/:id'} render={(props)=>{
                        let {match: {params: {id}}} = props
                        return <FullComment id={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default AllComments;