import React, {Component} from 'react';
import Post from "./Post";
import {PostServices} from "../services/PostServices";


class Posts extends Component {

    postServices = new PostServices()


    state = {posts: [], chosenPost: null,}

    componentDidMount() {

        this.postServices.getAllPosts().then(value => this.setState({posts: value}))

    }

    // selectPost = (id) => {
    //     let post = this.state.posts.find(item => item.id === id)
    //     this.setState({chosenPost: post})
    // }
    selectPost = (id) => {
        this.postServices.getPostById(id).then(value => this.setState({chosenPost: value}))
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