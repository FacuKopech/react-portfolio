import React, { useState } from 'react';
import '../skills/skills.css';

export default function Skills() {
  const [activeOption, setActiveOption] = useState(null);
  const [activeOption2, setActiveOption2] = useState(null);  

  const optionsData1 = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://icons8.com/icon/55205/c-sharp-logo',
      title: 'C#',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'C#'

    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: '',
      title: '.NET',
      description: 'I have been a C# developer since 2019',
      iconLabel: '.NET'

    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: '',
      title: 'Entity Framework',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'EF'

    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.svgrepo.com/show/354420/swagger.svg',
      title: 'Swagger',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'SW'

    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      title: 'Postman',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'PM'

    },
    {
     subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: '',
      title: 'SQL',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'SQL'

    },    
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: '',
      title: 'RESTFull API',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'API'

    }   
  ];

  const optionsData2 = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/353396/angular-icon.svg',
      title: 'Angular',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'A'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/349419/javascript.svg',
      title: 'JavaScript',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'JS'

    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.svgrepo.com/show/349540/typescript.svg',
      title: 'TypeScript',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'TS'

    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/452228/html-5.svg',
      title: 'HTML',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'HTML'

    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
      title: 'CSS',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'CSS'

    }    
  ];

  const handleOptionClickFirstSet = (index) => {
    setActiveOption(index);
    setActiveOption2(null);
  };

  const handleOptionClickSecondSet = (index) => {
    setActiveOption(null);
    setActiveOption2(index);
    };
    
  return (
    <div className='divContainer'>
    
    <div className='divTechDescription'>
        {optionsData2.map((option, index) => (
            <h3 key={index} className={index === activeOption2 ? 'animated-text' : ''}>
            {index === activeOption2 ? option.title : ''}
            </h3>
        ))}
        {optionsData1.map((option, index) => (
            <h3 key={index} className={index === activeOption ? 'animated-text' : ''}>
            {index === activeOption ? option.title : ''}
            </h3>
        ))}
    </div>

    <div className='divOptionsContainer'>
    <div className='divTitleContainer'>
      <h2 className='frontendTitle'>FrontEnd Technologies</h2>
      </div>      
      <div className="optionsSet">        
        {optionsData2.map((option, index) => (
          <div
            key={index}
            className={`option ${index === activeOption2 ? 'active' : ''}`}
            style={{ background: `url(${option.backgroundUrl}) center/276px no-repeat #33383cd4` }}
            onClick={() => handleOptionClickSecondSet(index)}
          >
            <div className="label">
              <div className="icon">
                <h5>{option.iconLabel}</h5>                
              </div>
              <div className="info">
                <div className="main">{option.label}</div>
                <div className="sub">{option.subLabel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='divTitleContainer'>
        <h2 className='backendTitle'>BackEnd Technologies</h2>
      </div>
      <div className="optionsSet">        
        {optionsData1.map((option, index) => (
          <div
            key={index}
            className={`option ${index === activeOption ? 'active' : ''}`}
            style={{ background: `url(${option.backgroundUrl}) center/276px no-repeat #33383cd4` }}
            onClick={() => handleOptionClickFirstSet(index)}
          >
            <div className="label">
              <div className="icon">
                <h5>{option.iconLabel}</h5>                
              </div>
              <div className="info">
                <div className="main">{option.label}</div>
                <div className="sub">{option.subLabel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
}
