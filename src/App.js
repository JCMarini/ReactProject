import './App.css';
import Button from './components/button';
import Navigation from './components/navigation';

function App() {
  return (
    <div className="App">
      <Navigation title="Hola Bar" />
      <header className="App-header">
        <Button title="Hola1" />
        <Button title="Hola2" />
      </header>
    </div>
  );
}

export default App;
