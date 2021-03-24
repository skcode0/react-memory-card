import './App.css';
import Nav from './components/Nav';
import GameBoard from './components/Gameboard';
import { GameboardProvider } from './components/GameboardContext';

function App() {
  return (
    <GameboardProvider>
      <div className="App">
        <Nav />
        <GameBoard />
      </div>
    </GameboardProvider>
  );
}

export default App;
