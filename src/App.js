/* A counter app example with React and Storybook */
import './App.css';
import { Counter } from './components/Counter';

function App() {
  return (
    <div className="App">
      <header>
        <br />
        <h1>Counter App</h1>
      </header>
      <div>
        <Counter />
      </div>
    </div>
  );
}

export default App;
