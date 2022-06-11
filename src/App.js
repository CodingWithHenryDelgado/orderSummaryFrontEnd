import illustration from './images/illustration-hero.svg';
import musicalnote from './images/icon-music.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='order-summary'>
        <img src={illustration} alt="Illustration of a girl dancing to music"/>
        <h1>Order Summary</h1>
        <p>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
        <div className='yearly-plan'>
          <img src={musicalnote} alt="an icon of a musical note"/>
          <div className='chosen-plan'>
            <h3>Annual Plan</h3>
            <p>$59.99/year</p>
          </div>
          <a href="http://localhost:3000/">Change</a>
        </div>
        <button className='payment'>Proceed to Payment</button>
        <a className='cancel-order' href="http://localhost:3000/">Cancel Order</a>
      </div>
    </div>
  );
}

export default App;
