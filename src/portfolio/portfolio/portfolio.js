import React, { Component } from 'react';
import '../portfolio/portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
        <div className='divContainer'>
            <div className="divTitle">
               <h2>Personal Projects</h2>
            </div>
            <div className="divCardsContainer">          
                <div className="divCards">
                    <div className="divCard" ontouchstart="this.classList.toggle('hover');">
                        <div className="container">
                            <div className="front" style={{ background: `url(https://thumbs.dreamstime.com/b/laptop-user-icon-vector-group-communication-symbol-laptop-user-icon-vector-group-communication-symbol-vector-illustration-isolated-237285600.jpg) center/264px no-repeat` }}>
                                <div className="inner">
                                    <p>Digital Communications Notebook</p>
                                    <div className='divStackIcons'>
                                        <img src='https://www.svgrepo.com/show/353396/angular-icon.svg'></img>                                       
                                        <img src='https://www.svgrepo.com/show/349540/typescript.svg'></img>
                                        <img src='https://www.svgrepo.com/show/452228/html-5.svg'></img>
                                        <img src='https://www.svgrepo.com/show/452185/css-3.svg'></img>
                                    </div>
                                    <div className='divStackIcons'>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png'></img>
                                        <img src='https://www.fixedbuffer.com/wp-content/uploads/2018/09/EFCore.png'></img>
                                        <img src='https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png'></img>
                                        <img src='https://www.svgrepo.com/show/354420/swagger.svg'></img>
                                        <img src='https://seeklogo.com/images/S/sql-logo-C370DEA066-seeklogo.com.png'></img>

                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>
                                        The Digital Communication Notebook project created a dedicated web app for parents to communicate directly 
                                        with their children's primary school. Parents could send messages, digitally sign notes, and manage attendance. 
                                        Teachers and the headmaster had tools for communication and maintaining a historical record of students. The system, 
                                        with a front end in Angular and a back end in .NET Core, aimed to streamline communication and provide administrative 
                                        features for school staff.<br/>
                                        <hr></hr>
                                        You can check the Github Repos <br/>
                                        <a href='https://github.com/FacuKopech/frontSCC-angular' target='_blank'>HERE</a> - FrontEnd <br/>
                                        <a href='https://github.com/FacuKopech/backSCC_netcore' target='_blank'>HERE</a> - BackEnd
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divCard" ontouchstart="this.classList.toggle('hover');">
                        <div className="container">
                            <div className="front" style={{ background: `url(https://i.pinimg.com/originals/d7/f3/de/d7f3de4da28141e8dee14267627e1e86.jpg) center/628px no-repeat` }}>
                                <div className="inner">
                                    <p>Simon Says</p>
                                    <div className='divStackIcons'>
                                        <img src='https://www.svgrepo.com/show/349419/javascript.svg'></img>                                                                               
                                        <img src='https://www.svgrepo.com/show/452228/html-5.svg'></img>
                                        <img src='https://www.svgrepo.com/show/452185/css-3.svg'></img>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>
                                        The Simon Says game project offered a challenging experience where players replicated sequences of 
                                        colored buttons, accompanied by lights and sounds. As players progressed, the game added difficulty by 
                                        increasing the time limit for each sequence. Player data, including play details, was stored in local storage. 
                                        Implemented using pure JavaScript, HTML, and CSS, the game provided an engaging and progressively difficult 
                                        gaming experience.<br/>
                                        <hr></hr>
                                        You can check the Github Repo <br/>
                                        <a href='https://github.com/FacuKopech/simon-dice' target='_blank'>HERE</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divCard" ontouchstart="this.classList.toggle('hover');">
                        <div className="container">
                            <div className="front" style={{ background: `url(https://us.123rf.com/450wm/korolyok/korolyok2111/korolyok211100079/177999855-newspaper-paper-grunge-aged-newsprint-pattern-background-vintage-old-newspapers-template-texture.jpg?ver=6) center/576px no-repeat` }}>
                                <div className="inner">
                                    <p>News Page</p>
                                    <div className='divStackIcons'>
                                        <img src='https://www.svgrepo.com/show/349419/javascript.svg'></img>                                                                               
                                        <img src='https://www.svgrepo.com/show/452228/html-5.svg'></img>
                                        <img src='https://www.svgrepo.com/show/452185/css-3.svg'></img>
                                    </div>
                                </div>
                            </div>
                            <div className="back">
                                <div className="inner">
                                    <p>
                                        The Newspaper Company Design project was a simple webpage showcasing a fictional newspaper company. 
                                        It demonstrated various fonts, styles, and news sections, serving as a foundational project for HTML and CSS. 
                                        Additionally, it included a registration view with validation. Developed with JavaScript, HTML, and CSS, 
                                        the project was a practical exercise in web design.<br/>
                                        <hr></hr>
                                        You can check the Github Repo <br/>
                                        <a href='https://github.com/FacuKopech/LPPA_uai/tree/main/HTML/Actividades_Clases_HTML' target='_blank'>HERE</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
        
    
    );
  }
}