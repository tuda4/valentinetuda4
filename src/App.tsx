import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import AcceptPage from '../src/pages/Accept';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/yay" Component={AcceptPage} />
      </Routes>
    </Router>
  );
}

export default App;