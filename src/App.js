// Importing the necessary modules 
import './App.css'; 
import React from 'react'; 
import { Component } from 'react';
import "leaflet/dist/leaflet.css"; 
import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker } from 'react-leaflet'; 
import { Icon } from 'leaflet';
import profileImage from './Images/profile-image.jpg'; 
import PeakOverPressureClass from './Algorithms/Algorithim';
import downArrow from './Images/down_arrow.png'; 
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
    let latitude = Number.parseFloat(event.target[5].value) || 0.00; 
    let longitude = Number.parseFloat(event.target[6].value) || 0.00; 

    console.log(outterCircleDistance); 
    console.log(innerCircleDistance); 

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
        innerCircleRadius: innerCircleDistance, 
        innerCirclePeakOverPressure: innerCircleBlastRadiusCalculation.peakOverpressure().toFixed(3), 
        outterCircleRadius: outterCircleDistance, 
        outterCirclePeakOverPressure: outterCircleBlastRadiusCalculation.peakOverpressure().toFixed(3), 
    })

  }

  // Render the App component 
  render() {
    if (this.state.innerCircleRadius === "") {
      return(
        <React.Fragment> 
            {/* Adding the navbar */}
            <Navbar/>

            {/* Adding the main div */}
            <div className="main-div"> 
                    <div className="left-side-div"> 
                        <section className="profile-section"> 
                            <div className="profile-div"> 
                            <img src={profileImage} className="profile-image" /> 
                            <img src={downArrow} className="down-arrow" /> 
                            <p className="user-name para"> Mbonu Chinedum E </p>
                            </div>
                        </section>
                        <section className="description-section"> 
                        <div className="image-display"> 
                        </div>
                        <div className="definition"> 
                            <h3 className="blast-radius-header"> Blast Radius </h3>
                            <p className="blast-radius-definition para"> 
                                A <b> blast radius </b> is the distance from the source that will be 
                                affected when an explosion occurs. <br /> 
                                A blast radius is often associated with <b> bombs </b>, <b> mines </b>, 
                                explosive projectiles (propelled grenades), and other weapons with an explosive charge.  
                            </p>
                        </div>
                        </section>
                        <form className='input-fields-section' onSubmit={this.handleSubmit}> 
                            <label className="distance-label"> Distance (meters) </label>
                            <input type="text" className="distance" id="distance" placeholder="Distance" /> 

                            <label className="explosion-efficiency-label"> Explosion efficiency </label>
                            <input type="text" className="explosion-efficiency" id="explosion-efficiency" placeholder="Explosion efficiency" /> 

                            <label className="mass-of-fuel-label"> Mass of Fuel (Combustible-fuel) (Kg) </label>
                            <input type="text" className="mass-of-fuel" id="mass-of-fuel" placeholder='Mass of Fuel (kg)' /> 

                            <label className="molar-mass-of-fuel-label"> Molar mass of fuel (g/moles) </label>
                            <input type="text" className="molar-mass-of-fuel" id="molar-mass-of-fuel" placeholder="Molecular mass of Fuel" /> 

                            <label className="heat-of-combustion-of-fuel-label"> Heat Of Combustion Of Fuel </label> 
                            <input type="text" className="heat-of-combustion-of-fuel" id="heat-of-combustion-of-fuel" placeholder="Heat Of Combustion Of Fuel" /> 

                            <p className="para specify-location-para"> Specify the location for the < br/>
                                calculation of BR. 
                            </p>

                            <div className="latitude-label-input"> 
                                <label className="latitude-label"> Latitude </label> < br/> 
                                <input type="number" className="latitude" id="latitude" placeholder="Latitude (lat)" /> 
                            </div>

                            <div className="longitude-label-input"> 
                                <label className="longitude-label"> Longitude </label>
                                <input type="number" className="longitude" id="longitude" placeholder="Longitude"/> 
                            </div>
                            
                            {/* Creating a button to calculate the blast radius */}
                            <button className="calculate-blast-radius" id="calculate-blast-radius"> Calculate Blast </button>
                            {/* <input type="button"  className="calculate-blast-radius" onClick={this.getUserData} id="calculate-blast-radius" value="Calculate Blast" />  */}
                        </form>
                    </div>

                    <div className="map-div-search" id="map-div-search"> 
                        <div className="search-div"> 
                            <input type="search" className="search-field" placeholder='Search here.'/>  
                            <input type="button" className="search-button" value="search" /> 
                        </div>
                        {/* Adding the leaflef map */}
                        <div className="map-div" id="map-div"> 
                          <MapContainer center={[this.state.latitude, this.state.longitude]} zoom={10} scrollwheelZoom={false}>
                            <TileLayer attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                               url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />


                            {/* Adding the outter circle 
                            <Circle center={[this.state.latitude, this.state.longitude]} radius={this.state.outterCircleRadius} fillColor="yellow" color="yellow" >
                              <Popup> 
                                  <p> Distance: <b> {this.state.outterCircleRadius} </b> <br/> 
                                  PeakOverPressure <br/> <b> {this.state.outterCirclePeakOverPressure} Kpa </b> </p>
                              </Popup>
                            </Circle>

                            
                            <CircleMarker center={[this.state.latitude, this.state.longitude]} radius={this.state.innerCircleRadius} color="red" >
                              <Popup> 
                                  <p> Distance: <b> {this.state.innerCircleRadius} </b> <br/> 
                                  PeakOverPressure <br /> <b> {this.state.innerCirclePeakOverPressure} Kpa </b> </p>
                              </Popup>
                            </CircleMarker>
                            */}
                           
                          </MapContainer>
                        
                        
                        </div>                    
                    </div> 
                </div>


        </React.Fragment>
    )

    }

    else {
      return(
        <React.Fragment> 
            {/* Adding the navbar */}
            <Navbar/>

            {/* Adding the main div */}
            <div className="main-div"> 
                    <div className="left-side-div"> 
                        <section className="profile-section"> 
                            <div className="profile-div"> 
                            <img src={profileImage} className="profile-image" /> 
                            <img src={downArrow} className="down-arrow" /> 
                            <p className="user-name para"> Mbonu Chinedum E </p>
                            </div>
                        </section>
                        <section className="description-section"> 
                        <div className="image-display"> 
                        </div>
                        <div className="definition"> 
                            <h3 className="blast-radius-header"> Blast Radius </h3>
                            <p className="blast-radius-definition para"> 
                                A <b> blast radius </b> is the distance from the source that will be 
                                affected when an explosion occurs. <br /> 
                                A blast radius is often associated with <b> bombs </b>, <b> mines </b>, 
                                explosive projectiles (propelled grenades), and other weapons with an explosive charge.  
                            </p>
                        </div>
                        </section>
                        <form className='input-fields-section' onSubmit={this.handleSubmit}> 
                            <label className="distance-label"> Distance (meters) </label>
                            <input type="text" className="distance" id="distance" placeholder="Distance" /> 

                            <label className="explosion-efficiency-label"> Explosion efficiency </label>
                            <input type="text" className="explosion-efficiency" id="explosion-efficiency" placeholder="Explosion efficiency" /> 

                            <label className="mass-of-fuel-label"> Mass of Fuel (Combustible-fuel) (Kg) </label>
                            <input type="text" className="mass-of-fuel" id="mass-of-fuel" placeholder='Mass of Fuel (kg)' /> 

                            <label className="molar-mass-of-fuel-label"> Molar mass of fuel (g/moles) </label>
                            <input type="text" className="molar-mass-of-fuel" id="molar-mass-of-fuel" placeholder="Molecular mass of Fuel" /> 

                            <label className="heat-of-combustion-of-fuel-label"> Heat Of Combustion Of Fuel </label> 
                            <input type="text" className="heat-of-combustion-of-fuel" id="heat-of-combustion-of-fuel" placeholder="Heat Of Combustion Of Fuel" /> 

                            <p className="para specify-location-para"> Specify the location for the < br/>
                                calculation of BR. 
                            </p>

                            <div className="latitude-label-input"> 
                                <label className="latitude-label"> Latitude </label> < br/> 
                                <input type="number" className="latitude" id="latitude" placeholder="Latitude (lat)" /> 
                            </div>

                            <div className="longitude-label-input"> 
                                <label className="longitude-label"> Longitude </label>
                                <input type="number" className="longitude" id="longitude" placeholder="Longitude"/> 
                            </div>
                            
                            {/* Creating a button to calculate the blast radius */}
                            <button className="calculate-blast-radius" id="calculate-blast-radius"> Calculate Blast </button>
                            {/* <input type="button"  className="calculate-blast-radius" onClick={this.getUserData} id="calculate-blast-radius" value="Calculate Blast" />  */}
                        </form>
                    </div>

                    <div className="map-div-search" id="map-div-search"> 
                        <div className="search-div"> 
                            <input type="search" className="search-field" placeholder='Search here.'/>  
                            <input type="button" className="search-button" value="search" /> 
                        </div>
                        {/* Adding the leaflef map */}
                        <div className="map-div" id="map-div"> 
                          <MapContainer center={[this.state.latitude, this.state.longitude]} zoom={10} scrollwheelZoom={false}>
                            <TileLayer attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                               url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />


                            {/* Adding the outter circle */}
                            <Circle center={[this.state.latitude, this.state.longitude]} radius={this.state.outterCircleRadius} fillColor="yellow" color="yellow" >
                              <Popup> 
                                  <p> Distance: <b> {this.state.outterCircleRadius} </b> <br/> 
                                  PeakOverPressure <br/> <b> {this.state.outterCirclePeakOverPressure} Kpa </b> </p>
                              </Popup>
                            </Circle>

                            {/* Adding the inner circle  */}
                            <CircleMarker center={[this.state.latitude, this.state.longitude]} radius={this.state.innerCircleRadius} color="red" >
                              <Popup> 
                                  <p> Distance: <b> {this.state.innerCircleRadius} </b> <br/> 
                                  PeakOverPressure <br /> <b> {this.state.innerCirclePeakOverPressure} Kpa </b> </p>
                              </Popup>
                            </CircleMarker>
                           
                          </MapContainer>
                        
                        
                        </div>                    
                    </div> 
                </div>


        </React.Fragment>
    )
    }
    
    
  }
}

// Exporting the App 
export default App; 