import './App.css';
import { Header, Container, Footer, Hero, Mostpopular, Card, Gaminglibrary, Home, Profile } from './components/export.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
