import {React, useState, useEffect} from 'react';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import './App.css';
import About from './portfolio/about/about';
import Skills from './portfolio/skills/skills';
import Home from './portfolio/home/home';
import Portfolio from './portfolio/portfolio/portfolio';

function App() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled, and set the sticky state accordingly
      setSticky(window.scrollY > 0);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <html lang="en">
      <head>        
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />        
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://facukopech.github.io/my-portfolio/; 
          img-src 'self' https://openqube.io/ https://polotecnologico.net https://media.licdn.com https://cdn.jsdelivr.net https://pngset.com https://static.vecteezy.com
          https://w7.pngwing.com https://tl.vhv.rs https://raw.githubusercontent.com https://tl.vhv.rs https://static-00.iconduck.com https://cdn-icons-png.flaticon.com
          https://www.svgrepo.com https://icons8.com https://seeklogo.com https://upload.wikimedia.org https://www.fixedbuffer.com https://www.sovereignconsult.com
          https://miro.medium.com;  
          font-src 'self' https://fonts.gstatic.com
          https://cdn.jsdelivr.net data:; "/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>                                                
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&display=swap" rel="stylesheet"/>
        
        <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
        <title>Facundo Kopech - Portfolio</title>
      </head>
      <body>
        <header className={isSticky ? 'sticky' : ''}>
          <div className="divWelcome">
            <p>Welcome!</p>
          </div>
          <nav className="navButtons">
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/about">
              <p>About</p>
            </Link>
            <Link to="/skills">
              <p>Skills</p>
            </Link>
            <Link to="/portfolio">
              <p>Portfolio</p>
            </Link>           
        </nav>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>          
        </section>
        <script src="index.js"></script>
      </body>
    </html>
  );
}

export default App;
