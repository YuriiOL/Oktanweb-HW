import React, {Component} from 'react';

class Car extends Component {
    render() {
        let {singleCar} = this.props
        return (
            <div>
                <p>{singleCar.name} - {singleCar.model} - {singleCar.year} - {singleCar.horses} - {singleCar.color} - {singleCar.driver.name} - {singleCar.driver.age} - {singleCar.driver.stage}</p>
            </div>
        );
    }
}

export default Car;