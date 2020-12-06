import React, {Component} from 'react';
import Car from "./Car";

class Cars extends Component {
    Car = [
        {
            name:'Bmw' ,model: 'X5', year: '2011', horses: 300, color: 'white', driver: {name: 'Andriy', age: 25, stage: 5}
        },
        {

                name:'Kia',
                model: 'Sorento',
                year: '2012',
                horses: 120,
                color: 'brown',
                driver: {name: 'Andriy', age: 25, stage: 5}

        },
        {

                name:'Mercedes',
                model: 'w213',
                year: '2016',
                horses: 630,
                color: 'silver',
                driver: {name: 'Andriy', age: 25, stage: 5}

        },
        {
                name:'Skoda',
                model: 'Fabia',
                year: '2008',
                horses: 70,
                color: 'white',
                driver: {name: 'Andriy', age: 25, stage: 5}

        }
        ];

    render() {
        return (
            <div>
                <h1>Hello from Cars</h1>
                {this.Car.map((item, index) => (<Car singleCar={item} key={index}/>))}
            </div>
        );
    }
}

export default Cars;