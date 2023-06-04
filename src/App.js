import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap'

// Pages
import Homepage from './pages/Homepage';
import PokemonPage from './pages/PokemonPage';

// components
import Header from './components/Header';




const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokemon/:id" component={PokemonPage} />
      </Routes>
    </Router>
  );
}

export default App;
