import './Styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Connect from './Pages/Connect';
import Place from './Pages/Place';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/place' element={<Place />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
