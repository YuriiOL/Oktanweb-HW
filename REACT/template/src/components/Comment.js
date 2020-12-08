import React, {Component} from 'react';

class Comment extends Component {
    render() {
        let {comment, selectComment} = this.props
        return (
            <div>
                {comment.id}: {comment.name} - {comment.email}
                <button onClick={()=>selectComment(comment.id)}>Select Comment</button>
            </div>
        );
    }
}


export default Comment;