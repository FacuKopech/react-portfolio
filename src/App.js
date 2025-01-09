import {React, useState, useEffect, useRef} from 'react';
import { Route, BrowserRouter, Link, Routes } from 'react-router-dom';
import './App.css';
import About from './portfolio/about/about';
import Skills from './portfolio/skills/skills';
import Home from './portfolio/home/home';
import Portfolio from './portfolio/portfolio/portfolio';
import $ from 'jquery';

function App() {
  const [isSticky, setSticky] = useState(false);
  const $ref = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    $($ref.current).on('scroll', function () {
      if ($(document).scrollTop() > 50) {
        $('.nav').addClass('affix');
        console.log('OK');
      } else {
        $('.nav').removeClass('affix');
      }
    });

    $('.navTrigger').on('click', function () {
      $(this).toggleClass('active');
      $("#mainListDiv").toggleClass("show_list");
      $("#mainListDiv").fadeIn();
    });

    $('.liElement').on('click', function () {
      $("#mainListDiv").removeClass("show_list");
      $('.navTrigger').removeClass('active');

    });

    return () => {      
      $('.navTrigger').off('click'); 
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
          https://www.svgrepo.com https://icons8.com https://seeklogo.com https://upload.wikimedia.org https://www.sovereignconsult.com
          https://miro.medium.com https://i.pinimg.com https://thumbs.dreamstime.com https://us.123rf.com https://github.com https://encrypted-tbn0.gstatic.com
          https://icon-library.com https://swiftlet.co.th https://logospng.org https://ajeetchaulagain.com https://kelmass.com https://miro.medium.com
          https://www.liblogo.com https://cdn.worldvectorlogo.com https://setecompu.com https://pnghq.com https://git-scm.com https://toppng.com
          https://download.logo.wine https://banner2.cleanpng.com https://cdn.iconscout.com;          
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
          <nav className="navButtons nav">
            <div id='mainListDiv' className='main_list'>
              <div className='navlinks'>
                <div className='divLinksContainer'>
                <Link className='liElement' to="/"> 
                  <p>Home</p>
                </Link>
                <Link className='liElement' to="/about">
                  <p>About</p>
                </Link>
                <Link className='liElement' to="/skills">
                  <p>Skills</p>
                </Link>
                <Link className='liElement' to="/portfolio">
                  <p>Portfolio</p>
                </Link>    
                </div>   
              </div>
            </div>
           
            <span class="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
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
