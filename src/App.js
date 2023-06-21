import NavBar from "./components/NavBar";
import TaxpayerDetails from "./components/TaxpayerDetails";
import FraudProtection from "./components/FraudProtection";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <div className="body-container">
        <ProgressBar />
        <div className="below-progress-bar">
          <div className="taxpayer-details">
            <TaxpayerDetails />
          </div>
          <FraudProtection />
        </div>
      </div>
    </div>
  );
}

export default App;
