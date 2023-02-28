// Importing the necessary modules 
import './App.css'; 
import React from 'react'; 
import { Component } from 'react';
import "leaflet/dist/leaflet.css"; 
import Map from "./Components/GenerateMap"; 
import PeakOverPressureClass from './Algorithms/Algorithim';
import Navbar from './Components/Navbar';


// Creating the UI component App 
class App extends Component {
  // Creating the state object 
  state = {
    latitude: 6.5479775, 
    longitude: 3.0037633, 
    innerCircleRadius: "", 
    innerCirclePeakOverPressure: "", 
    outterCircleRadius: "", 
    outterCirclePeakOverPressure: "", 
  }

  // Creating a function for handling the form on 
  // Submission 
  handleSubmit = (event) => {
    // Preventing the page from reloading
    event.preventDefault(); 

    // Creating the elements, and converting the values into 
    // Floating point numbers
    let outterCircleDistance = Number.parseFloat(event.target[0].value) || 0.00; 
    let innerCircleDistance = outterCircleDistance / 2;
    let explosionEfficiency = Number.parseFloat(event.target[1].value) || 0.00; 
    let massOfFuel = Number.parseFloat(event.target[2].value) || 0.00; 
    let molarMassOfFuel = Number.parseFloat(event.target[3].value) || 0.00; 
    let heatOfCombustionOfFuel = Number.parseFloat(event.target[4].value) || 0.00; 
    let latitude = Number.parseFloat(event.target[5].value) || 6.5479775; 
    let longitude = Number.parseFloat(event.target[6].value) || 3.0037633; 
 
    // Calculations for the outter circle blast radius calculation 
    let outterCircleBlastRadiusCalculation = new PeakOverPressureClass(
        outterCircleDistance, explosionEfficiency, massOfFuel, 
        molarMassOfFuel, heatOfCombustionOfFuel, latitude, longitude
    ); 

    // Calculations for the inner circle blast radius calculation 
    let innerCircleBlastRadiusCalculation = new PeakOverPressureClass(
        innerCircleDistance, explosionEfficiency, massOfFuel, 
        molarMassOfFuel, heatOfCombustionOfFuel, latitude, longitude
    ); 
    
    // Setting the state
    this.setState({
        latitude: latitude, 
        longitude: longitude, 
        innerCircleRadius: innerCircleDistance, 
        innerCirclePeakOverPressure: innerCircleBlastRadiusCalculation.peakOverpressure().toFixed(3), 
        outterCircleRadius: outterCircleDistance, 
        outterCirclePeakOverPressure: outterCircleBlastRadiusCalculation.peakOverpressure().toFixed(3), 
    })

  }

  // Render the App component 
  render() {
    return (
        <React.Fragment>
            {/* Adding the Navbar */}
            <Navbar />

            {/* Adding the Map component */}
            <Map props={this} />
        </React.Fragment>
    )
  }
}

// Exporting the App 
export default App; 