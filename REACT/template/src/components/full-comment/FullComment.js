import React, {Component} from 'react';
import {CommentsService} from "../services/CommentsService";

class FullComment extends Component {
    state = {comment: null}
    commentService = new CommentsService()

    async componentDidMount() {
        let {id} = this.props
        let comment = await this.commentService.getComment(id)
        this.setState({comment})
    }
    render() {
        let {comment} = this.state
        return (
            <div>
                {comment && <div>{comment.id}-{comment.name}-{comment.email}-{comment.body}</div>}
            </div>
        );
    }
}

export default FullComment;