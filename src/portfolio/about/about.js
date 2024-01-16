import React, { Component } from 'react';
import '../about/about.css'

export default class About extends Component {
  render() {
    return (        
        <div className="divMainContainer">
            <div className="divImgsContainer">
                <div className="divSofting">
                    <img
                    src="https://media.licdn.com/dms/image/C4E0BAQGrcvkZdchIvQ/company-logo_200_200/0/1631353644757?e=2147483647&v=beta&t=fnZTUAH_JMV9V6GDsf7eaT5dpeGEbayNIYLNyPR-jQQ"
                    alt=""
                    />
                </div>
                <div className="divMunicipal">
                    <img src="https://polotecnologico.net/wp-content/uploads/2018/01/Banco-Municipal.jpg" alt="" />
                </div>
                <div className="divSouthworks">
                    <img src="https://openqube.io/wp-content/uploads/2016/12/southworks-squarelogo-1567711527273-200x200.png" alt="" />
                </div>
            </div>
            <div className="Information">
                <div className="self-description">
                    <h1 className='h1About'>About</h1>
                    <div className="description">
                        My name is Facundo Kopech. I'm a Ssr Backend developer and a Junior Frontend developer.<br />
                        <br />
                        I'm 24 years old and I'm currently in my fifth and last year of the Software Engineer career.<br />
                        I started my career at the Catholic University of Santiago del Estero (U.C.S.E) and I'll be<br />
                        graduating in Universidad Abierta Interamericana (U.A.I) soon.<br />
                        <br />

                        I've been immersed in the world of software development since 2019 working for various companies, <br />
                        always under the position of web development, with a primary focus on Backend development. My very first <br />
                        work experience was in Softing S.R.L, a software company located in Rosario, Argentina. Later on, I worked <br />
                        in the Municipal Bank of Rosario. At both jobs, I was under the web development position. It wasn't until 2022 <br />
                        that I started working at SOUTHWORKS, which is the company I'm currently working at, as a Software Engineer (DEV). <br />
                        <br />
                        I've enjoyed every step of the way in my first 5 years of work experience so far, and learned a lot of things, including <br />
                        the fact that I would like to deepen my knowledge in FrontEnd technologies, which is why my goal is to <br />
                        become a Senior Full-Stack developer. <br />
                        <br />
                        I consider myself a hard worker, responsible and always wanting to learn more about the technologies I'm interested in.
                    </div>
                </div>
            </div>
        </div>
        
);
  }
}