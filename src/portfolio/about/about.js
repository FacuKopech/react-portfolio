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
                        My name is Facundo Kopech. I am both a Frontend and Backend developer, but I am looking forward to grow as a Frontend dev,<br />
                        given that with the experience I had I noticed that I highly prefer this field for my development career.<br />
                        <br />
                        I am 24 years old and I am currently in my fifth and last year of the Software Engineer career. I am planing on obtaining <br />
                        my degree by the end of this year. <br />
                        <br />

                        I started working as a developer at the age of 19 under the position of web developer, with a primary focus on Backend. <br />
                        My very first developer position was in Softing S.R.L, followed by Municipal Bank of Rosario, and finally, now I am working <br />
                        at Southworks.<br />
                        <br />
                        All of these experiences allowed me to grow and learn a variety of technologies and methodologies. This is why right now I have a <br />
                        clear goal, which is to deepen my knowledge in FrontEnd technologies and become a Senior Full-Stack developer. All of these experiences <br />
                        allowed me to grow and learn a variety of technologies and methodologies. This is why right now I have a clear goal, which is to deepen <br />
                        my knowledge in FrontEnd technologies and become a Senior Full-Stack developer. <br />
                        <br />
                        I consider myself hard worker, responsible and always wanting to learn more about the technologies I am interested in. I am looking for a company <br />
                        which would give me the opportunity to grow in everything related to FE, which is my motivation to be looking for this change. <br />
                        <br />
                        Said that, I appreciate very much your time for reading about me and my professional interests.
                    </div>
                </div>
            </div>
        </div>
        
);
  }
}