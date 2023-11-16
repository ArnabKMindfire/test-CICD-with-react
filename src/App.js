import './App.css';
import Canvas from './components/Canvas';

function App() {
  return (
    <div className="App">
      <h1 style={{ color: "red" }}>This is a HTML Canvas demo project</h1>
      <Canvas width={window.innerWidth} height={window.innerHeight} canvasCtx="2d" />
    </div>
  );
}

export default App;
