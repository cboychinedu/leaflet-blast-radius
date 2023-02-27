// Importing the necessary modules 
import '../App.css'; 
import { HashRouter, Link } from 'react-router-dom';
import React, { Component } from 'react'; 

// Creating the UI component 
class Navbar extends Component {
    render() {
        return (
            <React.Fragment> 
                <HashRouter>
                    <nav className="left-navbar">
                        <Link className="home" to="/"> Home </Link>
                        <Link className="about" to="#"> About </Link>
                        <Link className="event" to="#"> Event </Link>
                        <Link className="notifications" to="#"> Notifications </Link> 
                    </nav>
                </HashRouter>
            </React.Fragment>
        )
    }
}

// Exporting the Navbar 
export default Navbar; 