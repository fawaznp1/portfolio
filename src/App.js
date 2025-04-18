import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from './components/Tabww';


function App() {
  return (
    <div className="App" >
      <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tab" element={<Tab />} />

    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
