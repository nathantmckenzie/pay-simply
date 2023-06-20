import Header from "./components/Header";
import TaxpayerDetails from "./components/TaxpayerDetails";
import FraudProtection from "./components/FraudProtection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="okay">
        <TaxpayerDetails />
        <FraudProtection />
      </div>
    </div>
  );
}

export default App;
