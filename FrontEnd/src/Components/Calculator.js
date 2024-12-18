import './Css/calc.css';
import React, { useState } from 'react';

export default function Calculator() {
    const [total, setTotal] = useState(null);

    function calculateFootprint() {
        const cityFactors = {"CityA": 10, "CityB": 15, "CityC": 20};
        const professionFactors = {"Agricultural": 5, "Corporate": 10, "Industrial": 15};
        const dietFactors = {"Vegetarian": 2, "NonVegetarian": 5, "Vegan": 1};
        const housingFactors = {"Apartment": 5, "House": 10};
        const transportFactors = {"Bicycle": 1, "Car": 5, "PublicTransport": 2};

        // Access user input from form elements
        const city = document.getElementById('location').value;
        const profession = document.getElementById('profession').value;
        const diet = document.getElementById('diet').value;
        const housing = document.getElementById('housing').value;
        const transport = document.getElementById('transportation').value;

        // Calculate carbon footprint based on input factors
        const carbonFootprint = (
            cityFactors[city] || 0 +
            professionFactors[profession] || 0 +
            dietFactors[diet] || 0 +
            housingFactors[housing] || 0 +
            transportFactors[transport] || 0
        );

        setTotal(carbonFootprint);
    }

    return (
        <div className="calculator-container">
            <form id="footprint-form">
                <div className="form-div">
                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" placeholder="City" />
                </div>

                <div className="form-div">
                    <label htmlFor="housing">Housing Type:</label>
                    <select name="housing" id="housing">
                        <option value="Apartment">Apartment</option>
                        <option value="House">House</option>
                    </select>
                </div>

                <div className="form-div">
                    <label htmlFor="transportation">Transportation:</label>
                    <select name="transportation" id="transportation">
                        <option value="Car">Car</option>
                        <option value="PublicTransport">Public Transport</option>
                        <option value="Bicycle">Bicycle</option>
                    </select>
                </div>

                <div className="form-div">
                    <label htmlFor="diet">Diet:</label>
                    <select name="diet" id="diet">
                        <option value="Vegetarian">Vegetarian</option>
                        <option value="NonVegetarian">Non - Vegetarian</option>
                        <option value="Vegan">Vegan</option>
                    </select>
                </div>

                <div className="form-div">
                    <label htmlFor="profession">Profession:</label>
                    <select name="profession" id="profession">
                        <option value="Industrial">Industrial Sector</option>
                        <option value="Corporate">Corporate Sector</option>
                        <option value="Agricultural">Agricultural Sector</option>
                    </select>
                </div>

                <button type="button" onClick={calculateFootprint}>Calculate My Footprint</button>
            </form>

            {total !== null && (
                <div className="result">
                    <p>Total Footprint: {total}</p>
                </div>
            )}
        </div>
    )
}