import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import Accept from './pages/Accept';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/accept" Component={Accept}/>
      </Routes> 
    </Router>
  );
}

export default App;