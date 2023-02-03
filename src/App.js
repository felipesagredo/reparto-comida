import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <code>McGregori</code>
        </p>
        <p>'La comida hecha en casa'</p>
        <p>Food and Delivery</p>
        <a
          className="App-link"
          href="https://instagram.com/mcgregorifood"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram: McGregoriFood
        </a>
      </header>
    </div>
  );
}

export default App;
