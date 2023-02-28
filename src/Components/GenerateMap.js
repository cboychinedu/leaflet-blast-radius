// Importing the necessary modules 
import profileImage from "../Images/profile-image.jpg"; 
import downArrow from '../Images/down_arrow.png'; 
import markerIcon from '../Images/marker-icon.png'
import DamageEstimation from "../Algorithms/DamageEstimation";
import React from "react";
import { Icon } from "leaflet"; 
import { MapContainer, TileLayer, Popup, Circle, Marker, CircleMarker } from 'react-leaflet'; 

// Creating an icon 
const customIcon = new Icon({
    iconUrl: markerIcon, 
    iconSize: [38, 38]
}); 

// Creating the UI component Map 
let Map = (props) => {
    // If else statement 
    if (props.props.state.innerCircleRadius === "") {
        return (
            <React.Fragment>
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
                            <form className='input-fields-section' onSubmit={props.props.handleSubmit}> 
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
                            <MapContainer center={[props.props.state.latitude, props.props.state.longitude]} zoom={10} scrollwheelZoom={false}>
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

    // Else statement 
    else {
        return(
            <React.Fragment>
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
                        <form className='input-fields-section' onSubmit={props.props.handleSubmit}> 
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
                          <MapContainer center={[props.props.state.latitude, props.props.state.longitude]} zoom={10} scrollwheelZoom={false}>
                            <TileLayer attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                               url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />

                            {/* Adding the default Marker */}
                            <Marker position={[props.props.state.latitude, props.props.state.longitude]} icon={customIcon}>
                                <Popup>
                                    <p> This is your current location. </p>
                                </Popup>
                            </Marker>

                            {/* Adding the outter circle */}
                            <Circle center={[props.props.state.latitude, props.props.state.longitude]} radius={props.props.state.outterCircleRadius} fillColor="yellow" color="yellow" >
                              <Popup> 
                                <p className="desc-para"> Distance: <b> {props.props.state.outterCircleRadius} meters </b> <br/> 
                                  PeakOverPressure: <b> {props.props.state.outterCirclePeakOverPressure} Kpa </b> <br /> 
                                  DamageEstimation: <b> { DamageEstimation(props.props.state.outterCirclePeakOverPressure) } </b>
                                </p>
                              </Popup>
                            </Circle>

                            {/* Adding the inner circle  */}
                            <CircleMarker center={[props.props.state.latitude, props.props.state.longitude]} radius={props.props.state.innerCircleRadius} color="red" >
                              <Popup> 
                                <p className="desc-para"> Distance: <b> {props.props.state.innerCircleRadius} meters </b> <br/> 
                                  PeakOverPressure: <b> {props.props.state.innerCirclePeakOverPressure} Kpa </b> <br /> 
                                  DamageEstimation: <b> { DamageEstimation(props.props.state.innerCirclePeakOverPressure) } </b> 
                                </p>
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

// Exporting the default Map 
export default Map; 