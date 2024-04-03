import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import ErrorPage from './Components/404';
import Contact from './Components/Contact';
import About from './Components/About';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [progress, setProgress] = useState(0)
  const location = useLocation()

  useEffect(() => {
    setProgress(10)
    setProgress(100)
  }, [location])

  return (
    <div className="bg-bgColor min-h-screen min-w-[100%]">
      <Navbar />
      <LoadingBar
        height="3px"
        color="#ff0000"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/About" element={ <About /> } />
        <Route exact path="/Contact" element={ <Contact /> } />
        <Route exact path="*" element={ <ErrorPage /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
