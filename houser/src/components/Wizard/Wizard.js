import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
    }

    //method - handle input change
    handleNameChange = val => {
        this.setState({
            name: val
        })
    }

    handleAddressChange = val => {
        this.setState({
            address: val
        })
    }

    handleCityChange = val => {
        this.setState({
            city: val
        })
    }

    handleStateChange = val => {
        this.setState({
            state: val
        })
    }

    handleZipChange = val => {
        this.setState({
            zip: val
        })
    }

    //method - post new house to DB
    addProperty = () => {
        
    }

    render() {
        return(
        <div>
            <h1>Wizard</h1>
            <Link to="../Dashboard/Dashboard.js"><button>Cancel</button></Link>
            <div>
                <p>Property Name</p>
                <input type="text"
                placeholder="Name"
                onChange={ e => this.handleNameChange(e.target.value)}
                value={this.state.name}
                />
            </div>
            <div>
                <p>Address</p>
                <input type="text"
                placeholder="Address"
                onChange={ e => this.handleAddressChange(e.target.value)}
                value={this.state.address}
                />
            </div>
            <div>
                <p>City</p>
                <input type="text"
                placeholder="City"
                onChange={ e => this.handleCityChange(e.target.value)}
                value={this.state.city}/>
                <p>State</p>
                <input type="text"
                placeholder="State"
                onChange={ e => this.handleStateChange(e.target.value)}
                value={this.state.state}/>
            </div>
            <div>
                <p>Zip</p>
                <input type="text"
                placeholder="Zip"
                onChange={ e => this.handleZipChange(e.target.value)}
                value={this.state.zip}
                />
            </div>
            
            <button onClick={this.addProperty}>Complete</button>

        </div>
        )
    }
}

export default Wizard;