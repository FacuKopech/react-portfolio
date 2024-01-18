import React, { Component } from 'react';
import '../home/home.css';

export default class Home extends Component {
  render() {
    return (
        <div className="main">
            <div className="images">
                <div className="blue-bg-outer">
                    <div className="white-bg">
                    <div className="blue-bg">
                        <img src="copy-removebg-preview.png" alt="" />
                    </div>
                    </div>
                </div>
            </div>
            <div className="Information">
            <h1 className='h1Name'>Hi, I'm Facundo</h1>
            <div className="animated_text">
                <h1 className="title">Full-Stack Developer</h1>
            </div>
            <div className='divSubtitle'>
                <h2>Let's talk</h2>
            </div>
            <div className="social">
                <a href="https://github.com/FacuKopech" target="_blank" title="GitHub">
                <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/facundo-kopech-8a50a61ba/" target="_blank" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
                </a>
                <a href="mailto:facukopech@gmail.com" title="Email">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                </a>
            </div>
            <br />
            <a href="Facundo Kopech - Resume 2023.pdf" target="_blank" title='CV' download="Facundo Kopech - Resume 2023.pdf">
                <button className="downloadButton"></button>
            </a>
            </div>
        </div>
    );
  }
}
