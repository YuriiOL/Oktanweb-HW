import React, {Component} from 'react';
import Posts from "./components/Posts";
import Comments from "./components/Comments";

class App extends Component {
    render() {
        return (
            <div>
              <h1>Hello React</h1>
                <Posts/>
                <hr/>
                <Comments />
            </div>
        );
    }
}

export default App;