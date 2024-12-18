import React, { useState } from 'react';
import './Css/personal.css';


export default function Personal() {

    const [recommendations, setRecommendations] = useState([]);

    function generateRecommendations(commute, recycle, meat, disposable) {
        let recommendations = [];

        if (commute === 'car') {
            recommendations.push("Consider carpooling or using public transportation to reduce emissions.");
        } else if (commute === 'public_transport') {
            recommendations.push("Continue using public transportation to reduce carbon emissions from commuting.");
        } else if (commute === 'bicycle_walk') {
            recommendations.push("Great job! Continue using bicycles or walking whenever possible to reduce your carbon footprint.");
        } else {
            recommendations.push("Consider alternatives like carpooling, biking, or using public transportation to reduce emissions.");
        }

        if (recycle === 'yes') {
            recommendations.push("Keep up the good work with recycling! Consider composting food waste to further reduce waste.");
        } else {
            recommendations.push("Start recycling regularly to reduce waste and conserve resources.");
        }

        if (meat === 'never') {
            recommendations.push("Eating less meat or adopting a vegetarian or vegan diet can significantly reduce your carbon footprint.");
        } else if (meat === 'rarely' || meat === 'occasionally') {
            recommendations.push("Consider reducing meat consumption further to lessen your environmental impact.");
        }

        if (disposable === 'never') {
            recommendations.push("Avoiding disposable products helps reduce waste and conserve resources. Keep it up!");
        } else {
            recommendations.push("Try to minimize the use of disposable products to reduce waste and environmental impact.");
        }

        return recommendations;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const commute = form.elements['commute'].value;
        const recycle = form.elements['recycle'].value;
        const meat = form.elements['meat'].value;
        const disposable = form.elements['disposable'].value;

        const recommendations = generateRecommendations(commute, recycle, meat, disposable);
        setRecommendations(recommendations);
    }

    return (
        <div className="personal-container">
            <div>
                <h1>Reduce Your Carbon Footprint: Personalized Tips</h1>
            </div>

            <div id="intro">
                <p>Welcome to our personalized carbon footprint reduction tips! Answer a few questions below, and we'll tailor our advice to help you reduce your environmental impact.</p>
            </div>

            <div id="questionnaire">
                <h2>Questionnaire</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            How do you usually commute?
                            <br />
                            <input type="radio" name="commute" value="car" /> Car
                            <input type="radio" name="commute" value="public_transport" /> Public Transportation
                            <input type="radio" name="commute" value="bicycle_walk" /> Bicycle/Walking
                            <input type="radio" name="commute" value="other" /> Other (Please specify)
                        </label>
                        <hr></hr>
                    </div>
                    <div>
                        <label>
                            Do you recycle regularly?
                            <br />
                            <input type="radio" name="recycle" value="yes" /> Yes
                            <input type="radio" name="recycle" value="no" /> No
                        </label>
                        <hr></hr>
                    </div>
                    <div>
                        <label>
                            How often do you eat meat?
                            <br />
                            <input type="radio" name="meat" value="daily" /> Daily
                            <input type="radio" name="meat" value="occasionally" /> Occasionally
                            <input type="radio" name="meat" value="rarely" /> Rarely
                            <input type="radio" name="meat" value="never" /> Never
                        </label>
                        <hr></hr>
                    </div>
                    <div>
                        <label>
                            How often do you use disposable products?
                            <br />
                            <input type="radio" name="disposable" value="frequently" /> Frequently
                            <input type="radio" name="disposable" value="occasionally" /> Occasionally
                            <input type="radio" name="disposable" value="rarely" /> Rarely
                            <input type="radio" name="disposable" value="never" /> Never
                        </label>
                    </div>
                    <button type="submit">Get Personalized Tips</button>
                </form>
            </div>

            <div id="recommendations">
                <h2>Recommendations</h2>
                <ul>
                    {recommendations.map((recommendation, index) => (
                        <li key={index}>{recommendation}</li>
                    ))}
                </ul>
            </div>

            <div>
                <p>Contact us at: imagineanyway@gmail.com</p>
            </div>

        </div>
    )
}
