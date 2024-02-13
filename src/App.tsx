import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes> 
    </Router>
  );
}

export default App;