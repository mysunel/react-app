import './css/App.css'
import Favorites from './pages/Favorites';
import Home from './pages/Home'
import NavBar from './components/NavBar';
import MovieDetails from './pages/MovieDetails';
import { MovieProvider } from './contexts/MovieContext';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
