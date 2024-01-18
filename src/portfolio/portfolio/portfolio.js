import React, { Component } from 'react';
import '../portfolio/portfolio.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="divMainContainer">
            <div className="divTitleContainer">
              <h2>Personal Projects</h2>
            </div>
            <div className="divProjects">
               <div className='divProjectsTitle'>
                    <h2>Projects</h2>
               </div>
            </div>
        </div>
    );
  }
}