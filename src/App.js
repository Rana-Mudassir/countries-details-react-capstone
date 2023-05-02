import { Routes, Route } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import './App.css';
import CountiesList from './componenets/countries/CountriesList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountiesList />} />
      </Routes>
    </>
  );
}

export default App;
