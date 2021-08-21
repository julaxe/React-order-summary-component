import "./App.css";
import imageHeader from "./images/illustration-hero.svg";
import logoMusic from "./images/icon-music.svg";

function App() {
  return (
    <div className="App center">
      <div className="content">
        <div className="image-header">
          <img src={imageHeader} alt="header" />
        </div>
        <div className="description center">
          <h2>Order Summary</h2>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
        </div>
        <div className="plan center">
          <div className="annual-plan center">
            <img src={logoMusic} className="icon-music" alt="music" />
            <div className="plan-description">
              <h4>Annual Plan</h4>
              <p>$59.99/year</p>
            </div>
            <a href="/" className="pointer">
              Change
            </a>
          </div>
        </div>
        <div className="call-to-action center">
          <div className="button pointer">Proceed to Payment</div>
          <div className="cancel-order pointer">Cancel Order</div>
        </div>
      </div>
    </div>
  );
}

export default App;
