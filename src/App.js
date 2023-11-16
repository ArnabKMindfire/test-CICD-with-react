import './App.css';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <Canvas width={window.innerWidth} height={window.innerHeight} canvasCtx="2d" />
    </div>
  );
}

export default App;
