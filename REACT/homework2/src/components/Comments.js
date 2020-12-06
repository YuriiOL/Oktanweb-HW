import React, {Component} from 'react';
import Comment from "./Comment";

class Comments extends Component {

    state = {comments: [], chosenComments: null,}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(commentsFromAPI=>{
                this.setState({comments: commentsFromAPI})
            })
    }

    selectComment = (id) => {
        let comment = this.state.comments.find(item => item.id === id)
        this.setState({chosenComments: comment})
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