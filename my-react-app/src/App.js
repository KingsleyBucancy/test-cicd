import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: 'lime', textAlign: 'center' }}>
          🚀 Welcome to My React CI/CD Test Page!
        </h1>
        <p style={{ textAlign: 'center', color: 'white' }}>
          This change was automatically deployed from GitHub Actions 🎯s
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
