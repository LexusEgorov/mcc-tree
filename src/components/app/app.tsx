import Header from '../header/header';
import Tree from '../tree/tree';
import './app.css';

function App() : JSX.Element {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Tree />
      </div>
    </div>
  );
}

export default App;
