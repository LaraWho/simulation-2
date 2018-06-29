import React, { Component } from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            houseList: []
        }
    }

    //method - get all houses from DB

    //method - delete a house from DB

    render() {
        let housesToDisplay =  this.state.houseList.map((house, index) => (
            <div key={index + house}>
                <p>Property Name: {house.name}</p>
                <p>Address: {house.address}</p>
                <p>City: {house.city}</p>
                <p>State: {house.state}</p>
                <p>Zip: {house.zip}</p>
            </div>
    ))

        
        return(
            <div>
                <h1>Dashboard</h1>
                { housesToDisplay }
                <Link to="../Wizard/Wizard.js"><button>Add New Property</button></Link>
            </div>
         )
        }
    }
    

export default Dashboard;