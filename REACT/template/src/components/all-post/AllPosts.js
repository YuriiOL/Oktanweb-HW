import React, {Component} from 'react';
import {PostService} from "../services/PostService";
import Post from "../post/Post";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import FullPost from "../full-post/FullPost";
import FullUser from "../full-user/FullUser";



class AllPosts extends Component {

    state = {posts: []}
    postService = new PostService()

    async componentDidMount() {
        let posts = await this.postService.getAllPosts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {posts.map(value => <Post key={value.id} item={value}/>)}
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props)=>{
                        const {match: {params: {id}}} = props
                        return <FullPost id={id} key={id}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default AllPosts;