import React, {Component} from 'react';

class User extends Component {
    render() {

        let {itemX} = this.props

        return (
            <div>
                <div className={"yura"}>{itemX.name} - {itemX.age} - {itemX.status.toString()} - {itemX.address.city} - {itemX.address.street} - {itemX.address.number}</div>
            </div>
        );
    }
}

export default User;