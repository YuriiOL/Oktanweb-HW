import React, {Component} from 'react';
import {UserService} from "../services/UserService";
import User from "../users/User";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

class AllUsers extends Component {

    state = {users: []}
    userService = new UserService()

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
        this.setState({users})
    }

    render() {
        let {users} = this.state
        return (
            <div>
                {users.map(value => <User key={value.id} item={value}/>)}
                <hr/>
                    <Switch>
                        <Route path={'/users/:id'} render={(props)=>{
                            console.log(props)
                            return 'asdasdas'
                        }}/>
                    </Switch>
                <hr/>
            </div>
        );
    }
}

export default AllUsers;