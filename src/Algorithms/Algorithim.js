// Creating a class for calculating the peak over pressures 
class PeakOverPressureClass {
    constructor(distance, explosionEfficiency, massOfFuel, molarMassOfFuel, heatOfCombustionOfFuel) {
        this.distance = Number.parseFloat(distance); // Unit in meters 
        this.explosionEfficiency = Number.parseFloat(explosionEfficiency);  // Expressed as 0.2 which is 2%. 
        this.massOfFuel = Number.parseFloat(massOfFuel); // Unit in kilograms 
        this.molarMassOfFuel = Number.parseFloat(molarMassOfFuel);  // Unit in moles 
        this.heatOfCombustionOfFuel = Number.parseFloat(heatOfCombustionOfFuel); 
        this.massOfTnt = 0.00; // Unit in kilograms 
        this.energyOfTnt = 4686; // Unit Kj/kg 
        this.numberOfMolesOfFuel = this.massOfFuel / this.molarMassOfFuel;  // Expressed in moles 
    }

    // Creating a method for calculating the TNT Equivalency of the 
    // Combustible fuel 
    massOfTntEquivalent() {
        // Solving for the massOfTnt 
        this.massOfTnt = (this.explosionEfficiency * this.massOfFuel * this.numberOfMolesOfFuel * this.heatOfCombustionOfFuel) / this.energyOfTnt; 

        // Returning the result 
        return this.massOfTnt; 
    }

    // Creating a method for calculating the scaled distance 
    scaledDistance() {
        // Getting the mass of tnt, and creating a variable to hold 
        // the calculated overpressure value 
        let ze;
        let massOfTnt = this.massOfTntEquivalent(); 

        // Solving for the overpressure 
        ze = this.distance / (Math.pow(massOfTnt, 0.3333)); 

        // Returning the result 
        return ze; 
    }

    // Creating the method for calculating the peakoverpressure 
    peakOverpressure() {
        let result; 
        let ze = this.scaledDistance(); 
        result = (1616 * [1 + Math.pow((ze / 4.5), 2)]) / ((Math.sqrt(1 + Math.pow((ze / 0.048), 2))) * (Math.sqrt(1 + Math.pow((ze / 0.32), 2))) * (Math.sqrt(1 + Math.pow((ze / 1.35), 2))))

        // Assuming the ambient pressure is 1atm => 101.325Kpa 
        // Then the estimated peak side-on overpressure is Po = Ps * Pa 
        // Where Ps = Scaled overpressure, and Pa = ambient pressure 
        result = result * 101.325; // Units expressed in Kilo pascals
        return result; 
    }
}

// Exporting the class 
export default PeakOverPressureClass; 