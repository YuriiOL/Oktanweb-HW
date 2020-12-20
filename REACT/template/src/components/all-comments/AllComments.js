import React, {Component} from 'react';
import {CommentsService} from "../services/CommentsService";
import Comment from "../comments/Comment";
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
        return (
            <div>
                {comments.map(value => <Comment key={value.id} item={value}/>)}
                <hr/>
                <Switch>
                    <Route path={'/comments/:id'} render={(props)=>{
                        return 'asdasdas'
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default AllComments;