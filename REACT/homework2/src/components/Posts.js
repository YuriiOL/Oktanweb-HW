import React, {Component} from 'react';
import Post from "./Post";

class Posts extends Component {

    state = {posts: [], chosenPost: null,}
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(postsFromAPI=>{
                this.setState({posts: postsFromAPI})
            })
    }

    selectPost = (id) => {
        let post = this.state.posts.find(item => item.id === id)
        this.setState({chosenPost: post})
    }

    render() {
        let{posts, chosenPost} = this.state
        return (
            <div>
                <h1>Posts</h1>
                {
                    posts.map(item =>(<Post post={item} key={item.id} selectPost={this.selectPost}/>))
                }
                <hr/>
                {
                  chosenPost && (<Post post={chosenPost}/>)
                }
            </div>
        );
    }
}

export default Posts;