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
            <div className="divAbout">
                <div className="self-description">
                    <h1 className='h1About'>About</h1>
                    <div className="description">
                        My name is Facundo Kopech. I'm 25 years old and I graduated as a Software Engineer in December, 2024. <br />
                        I'm both a Frontend and Backend developer, but I am looking forward to grow as a Frontend dev,
                        given that with the experience I had I noticed that I highly prefer this field for my development career.<br />
                        <br />

                        I started working as a developer at the age of 19 under the position of web developer, with a primary focus on Backend. <br />
                        My very first developer position was in Softing S.R.L, followed by Municipal Bank of Rosario, and finally, now I am working <br />
                        at Southworks, as a Software Engineer.<br />
                        <br />
                        All of these experiences allowed me to grow and learn a variety of technologies and methodologies. <br />
                        This is why right now I have a clear goal, which is to deepen my knowledge in FrontEnd technologies and become a Senior Full-Stack developer.<br/>
                        <br />
                        I consider myself hard worker, responsible and always wanting to learn more about the technologies I'm interested in. I'm looking for a company 
                        which would give me the opportunity to grow in everything related to FrontEnd, which is my motivation to be looking for this change. <br />
                        <br />
                        That being said, I appreciate very much your time for reading about me and my professional interests.
                    </div>
                </div>
            </div>
        </div>
        
);
  }
}