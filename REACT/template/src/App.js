import React, {Component} from 'react';
import AllUsers from "./components/all-users/AllUsers";
import AllPosts from "./components/all-post/AllPosts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import AllComments from "./components/all-comments/AllComments";


class App extends Component {
  render() {

    return (
  <Router>
        <div>
            <div>
                <Link to={'/users'}>
                    users
                </Link>
            </div>
            <div>
                <Link to={'/post'}>
                    posts
                </Link>
            </div>
            <div>
                <Link to={'/comments'}>
                    comments
                </Link>
            </div>

            <Switch>
                <Route path={'/users'} component={AllUsers}/>
                <Route path={'/post'} component={AllPosts}/>
                <Route path={'/comments'} component={AllComments}/>
            </Switch>
        </div>
  </Router>
    );
  }
}

export default App;
