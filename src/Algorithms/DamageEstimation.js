// Creating a function for estimating the damages caused by a failed 
// chemical process or fuel 
let DamageEstimation = (pressure) => {
    // Creating a variable called message to hold the 
    // Damage estimation description, and convert the pressure into a 
    // floating point number 
    pressure = Number.parseFloat(pressure); 
    let message; 

    // Using switch case statement to estimate the impact of the 
    // Blast wave/pressure wave at a specific distance. 
    switch (true) {
        case (pressure <= 0.14): 
            message = "Annoying noise (137dB of low frequency, 10-15Hz)."; 
            break; 

        case (pressure <= 0.21): 
            message = "Occasional breaking of large glass windows already under strain."; 
            break; 

        case (pressure <= 0.28): 
            message = "Loud noise (143dB), sonic boom, glass failure."; 
            break; 

        case (pressure <= 0.69): 
            message = "Breakage of small windows under strain."; 
            break; 

        case (pressure <= 1.03): 
            message = "Typical pressure for glass breakage."; 
            break; 

        case (pressure <= 2.07): 
            message = "Safe distance, (probability 0.95 of no serious damage below this value); projectile limit; some damage to house ceilings; 10% window glass broken"; 
            break; 

        case (pressure <= 2.76): 
            message = "Limited minor structural damage"; 
            break; 

        case (pressure <= 3.4 || pressure <= 6.9): 
            message = "Large and small windows usually shatter, occasional damage to window frames"; 
            break; 

        case (pressure <= 4.8): 
            message = "Minor damage to house structures"; 
            break; 

        case (pressure <= 6.9): 
            message = "Partial demolition of houses, made uninhabitable"; 
            break; 

        case (pressure <= 13.8): 
            message = "Corrugulated asbestos shatters; corrugated steel or aluminum panels, fastenings fail, followed by buckling; wood panels (standard housing), fastenings fails, panels blow in."; 
            break; 

        case (pressure <= 9.0): 
            message = "Steel frame of clad building slightly distorted"; 
            break; 

        case (pressure <= 13.8): 
            message = "Partial collapse of walls and roofs of houses"; 
            break; 

        case (pressure <= 20.7): 
            message = "Concrete or cinder block walls, not reinforced, shatter"; 
            break; 

        case (pressure <= 15.8): 
            message = "Lower limit of serious structural damage"; 
            break; 

        case (pressure <= 17.2): 
            message = "50% destruction of brickwork of houses"; 
            break; 

        case (pressure <= 20.7): 
            message = `Heavy machines (3000lb) in industrial buildings suffer little damage; Steel frame
            buildings distort and pull away from foundations`;
            break; 

        case (pressure <= 20.7 || pressure <= 27.6): 
            message = `Frameless, self-framing steel panel buildings demolished; rupture of oil storage tanks`; 
            break; 

        case (pressure <= 27.6): 
            message = `Cladding of light industrial buildings ruptures`; 
            break; 

        case (pressure <= 34.5): 
            message = "Wooden utility poles snap; tail hydraulic presses (40,000lb) in buildings slightly damaged"; 
            break; 

        case (pressure <= 34.5 || pressure <= 48.2): 
            message = "Nearly complete destruction of houses"; 
            break; 

        case (pressure <= 48.2): 
            message = "Loaded train wagons overturned"; 
            break; 

        case (pressure <= 48.2 || pressure <= 55.1): 
            message = "Brick panels, 8-12 inch thick, not reinforced, fail by shearing or flexure"; 
            break; 

        case (pressure <= 62.0): 
            message = "Loaded train boxcars completely demolished"; 
            break; 

        case (pressure <= 68.9): 
            message = `Probable total destruction of buildings; heavy machine tools (7000lb) moved and badly damaged, 
            very heavy machine tools (12,000lb) survive`; 
            break; 

        case (pressure > 68.9 || pressure >= 2068): 
            message = `Maximum damage, and total destruction to buildings and property. Limit of crater lip`; 
            break; 

        default: 
            message = "No parameter was specified";
            break;  
    }

    // Returning the message 
    return message; 

}

// Exporting the function 
export default DamageEstimation; 

// let res = DamageEstimation(36.098); 
// console.log(res); 


 