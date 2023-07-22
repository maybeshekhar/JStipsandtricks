
import './App.css';
import Doubts from './Components/Doubts/Doubts';
import Footer from './Components/Footer';
import Nnavbar from './Components/Navbar/Nnavbar';
import Thumnails from './Components/Thumbnails/Thumnails';
import Tricks from './Components/Tricks/Tricks';
import Meme from './Components/memes/Meme';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <div>
      <Router>
          <Nnavbar/>
           <br /> <br />
          <Routes>
                  <Route exact path='/' element={<Thumnails />} />
                  <Route exact path='/tricks' element={<Tricks />} />
                  <Route exact path='/memes' element={<Meme />} />
                  <Route exact path='/doubts' element={<Doubts />} />
          </Routes>
          <Footer />
      </Router>
    </div>
      
    </>
  );
}

export default App;
