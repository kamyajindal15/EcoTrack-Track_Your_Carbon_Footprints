
import './Css/Stats.css';

export default function Statistical() {

    const downloadCSV = () => {
        // Path to your CSV file
        const csvFilePath = process.env.PUBLIC_URL + '/carbon_footprints.csv';

        // Create a link element
        const link = document.createElement("a");
        link.setAttribute("href", csvFilePath);
        link.setAttribute("download", "data.csv");

        // Trigger the download
        document.body.appendChild(link); // Required for Firefox
        link.click();

        // Cleanup
        document.body.removeChild(link);
    };

    return (
        <div>
            <div className="img_flex">
                <div className="img_1"></div>
                <div className="img_2"></div>
                <div className="img_3"></div>
                <div className="img_4"></div>
            </div>
            <button onClick={downloadCSV}>Carbon Footprints</button>
        </div>
    )
}
