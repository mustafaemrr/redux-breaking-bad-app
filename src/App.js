import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from '../src/pages/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
          <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
