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
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {

    state = {users: []}
    userService = new UserService()

    async componentDidMount() {
        let users = await this.userService.getAllUsers()
        this.setState({users})
    }

    render() {
        let {users} = this.state
        let {match:{url}} = this.props
        return (
            <div>
                {users.map(value => <User key={value.id} item={value}/>)}
                <hr/>
                    <Switch>
                        <Route path={url + '/:id'} render={(props)=>{
                            let {match: {params: {id}}} = props
                            return <FullUser id={id} key={id}/>
                        }}/>
                    </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers)