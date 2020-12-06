
import './App.css';
import Users from "./components/Users";

import React, {Component} from 'react';
import Cars from "./components/Cars";

class App extends Component {

    render() {
        return (
            <div>
                <Users  usersArray={this.users}/>
                <Cars carArray={this.Car}/>
            </div>
        );
    }
}

export default App;
