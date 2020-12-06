import React, {Component} from 'react';

class Post extends Component {
    render() {
        let {post, selectPost} = this.props
        return (
            <div>
                {post.id}: {post.title}
                <button onClick={()=>selectPost(post.id)}>Select Post</button>
            </div>
        );
    }
}

export default Post;