import React, {Component} from 'react';
import Comment from "./Comment";
import {CommentServices} from "../services/CommentServices";

class Comments extends Component {

    commentServices = new CommentServices

    state = {comments: [], chosenComments: null,}
    componentDidMount() {
       this.commentServices.getAllComments().then(value => this.setState({comments: value}))
    }

    // selectComment = (id) => {
    //     let comment = this.state.comments.find(item => item.id === id)
    //     this.setState({chosenComments: comment})
    // }
    selectComment = (id) => {
        this.commentServices.getCommentById(id).then(value => this.setState({chosenComments: value}))
    }

    render() {
        let{comments, chosenComments} = this.state
        return (
            <div>
                <h1>Comments</h1>
                {
                    comments.map(item =>(<Comment comment={item} key={item.id} selectComment={this.selectComment}/>))
                }
                <hr/>
                {
                    chosenComments && (<Comment comment={chosenComments}/>)
                }
            </div>
        );
    }
}
export default Comments;