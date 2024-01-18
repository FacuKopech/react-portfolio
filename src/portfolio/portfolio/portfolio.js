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
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divCard" ontouchstart="this.classList.toggle('hover');">
                        <div className="container">
                            <div className="front" style={{ background: `url(https://i.pinimg.com/originals/d7/f3/de/d7f3de4da28141e8dee14267627e1e86.jpg) center/455px no-repeat` }}>
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
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divCard" ontouchstart="this.classList.toggle('hover');">
                        <div className="container">
                            <div className="front" style={{ background: `url(https://us.123rf.com/450wm/korolyok/korolyok2111/korolyok211100079/177999855-newspaper-paper-grunge-aged-newsprint-pattern-background-vintage-old-newspapers-template-texture.jpg?ver=6) center/422px no-repeat` }}>
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
                                    <p></p>
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