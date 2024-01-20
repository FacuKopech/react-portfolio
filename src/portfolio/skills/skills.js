import React, { useState, version, useEffect } from 'react';
import '../skills/skills.css';

export default function Skills() {
  const [isCentered, setCenter] = useState(false);
  const [backEndTechOption, setActiveBackEndTechOption] = useState(null);
  const [frontEndTechOption, setActiveFrontEndTechOption] = useState(null); 
  const [veresionControlOption, setActiveVeresionControlOption] = useState(null);
  const [agileOption, setActiveAgileOption] = useState(null);  
  const [cloudOption, setActiveCloudOption] = useState(null); 

  useEffect(() => {
    const handleScroll = () => {
      setCenter(window.scrollY > 650);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backEndTech = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png',
      title: 'C#',
      description: '',
      iconLabel: 'C#'

    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png',
      title: '.NET',
      description: 'I have been a C# developer since 2019',
      iconLabel: '.NET'

    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWY6XG3t94PxBtbOoXYCN9yte4qAiyQwjYA4sABvaqSUehBVvKrsyyS0-NY0g_arraH6A&usqp=CAU',
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
      backgroundUrl: 'https://seeklogo.com/images/S/sql-logo-C370DEA066-seeklogo.com.png',
      title: 'SQL',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'SQL'

    },    
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.sovereignconsult.com/wp-content/uploads/2020/03/RestApi.png',
      title: 'RESTFull API',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'API'

    }   
  ];

  const frontEndTech = [
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
      backgroundUrl: 'https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png',
      title: 'React',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'R'
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

  const versionControl = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png',
      title: 'GitHub',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'GH'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png',
      title: 'Git',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'Git'
    } 
  ];

  const agileMetho = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://miro.medium.com/v2/resize:fit:400/0*KpzqUReoWU_DEwb5.png',
      title: 'SCRUM',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'S'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://seeklogo.com/images/J/jira-logo-29D82276E3-seeklogo.com.png',
      title: 'JIRA',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'Jira'
    } 
  ];

  const cloud = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://seeklogo.com/images/A/amazon-web-services-aws-logo-6C2E3DCD3E-seeklogo.com.png',
      title: 'AWS',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'AWS'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://seeklogo.com/images/M/microsoft-azure-logo-2575D39E82-seeklogo.com.png',
      title: 'Azure',
      description: 'I have been a C# developer since 2019',
      iconLabel: 'AZ'
    } 
  ];

  const handleOptionClickBack = (index) => {
    setActiveBackEndTechOption(index);
    setActiveFrontEndTechOption(null);
    setActiveVeresionControlOption(null);
    setActiveAgileOption(null);
    setActiveCloudOption(null);
  };

  const handleOptionClickFront = (index) => {
    setActiveFrontEndTechOption(index);
    setActiveBackEndTechOption(null);
    setActiveVeresionControlOption(null);
    setActiveAgileOption(null);
    setActiveCloudOption(null);    
  };

  const handleOptionClickVersionControl = (index) => {
    setActiveVeresionControlOption(index);
    setActiveBackEndTechOption(null);
    setActiveFrontEndTechOption(null);  
    setActiveAgileOption(null);
    setActiveCloudOption(null);
  };

  const handleOptionClickAgile = (index) => {
    setActiveAgileOption(index);
    setActiveVeresionControlOption(null);
    setActiveBackEndTechOption(null);
    setActiveFrontEndTechOption(null);      
    setActiveCloudOption(null);
  };

  const handleOptionClickCloud = (index) => {
    setActiveCloudOption(index);
    setActiveAgileOption(null);
    setActiveVeresionControlOption(null);
    setActiveBackEndTechOption(null);
    setActiveFrontEndTechOption(null);      
  };
    
  return (
    <div className='divContainer'>
    
    <div className={`divTechDescription ${isCentered ? 'centered' : ''}`}>
        {frontEndTech.map((option, index) => (
            <h3 key={index} className={index === frontEndTechOption ? 'animated-text' : ''}>
            {index === frontEndTechOption ? option.title : ''}
            </h3>
        ))}
        {backEndTech.map((option, index) => (
          <>
          <h3 key={index} className={index === backEndTechOption ? 'animated-text' : ''}>
            {index === backEndTechOption ? option.title : ''}
            </h3>
          </>
            
        ))}
        {versionControl.map((option, index) => (
            <h3 key={index} className={index === veresionControlOption ? 'animated-text' : ''}>
            {index === veresionControlOption ? option.title : ''}
            </h3>
        ))}
        {agileMetho.map((option, index) => (
            <h3 key={index} className={index === agileOption ? 'animated-text' : ''}>
            {index === agileOption ? option.title : ''}
            </h3>
        ))}
        {cloud.map((option, index) => (
            <h3 key={index} className={index === cloudOption ? 'animated-text' : ''}>
            {index === cloudOption ? option.title : ''}
            </h3>
        ))}
    </div>

    <div className='divOptionsContainer'>
    <div className='divTitleContainer'>
      <h2 className='frontendTitle'>FrontEnd Technologies</h2>
      </div>      
      <div className="optionsSet">        
        {frontEndTech.map((option, index) => (
          <div
            key={index}
            className={`option ${index === frontEndTechOption ? 'active' : ''}`}
            style={{ background: `url(${option.backgroundUrl}) center/276px no-repeat #33383cd4` }}
            onClick={() => handleOptionClickFront(index)}
          >
            <div className="label">
              <div className="icon">
                <h5>{option.iconLabel}</h5>                
              </div>              
            </div>
          </div>
        ))}
      </div>
      <div className='divTitleContainer'>
        <h2 className='backendTitle'>BackEnd Technologies</h2>
      </div>
      <div className="optionsSet">        
        {backEndTech.map((option, index) => (
          <div
            key={index}
            className={`option ${index === backEndTechOption ? 'active' : ''}`}
            style={{ background: `url(${option.backgroundUrl}) center/276px no-repeat #33383cd4` }}
            onClick={() => handleOptionClickBack(index)}
          >
            <div className="label">
              <div className="icon">
                <h5>{option.iconLabel}</h5>                
              </div>              
            </div>
          </div>
        ))}
      </div>
      <div className='divTitleContainer'>
        <h2 className='frontendTitle'>Version Control</h2>
      </div>
      <div className="optionsSet">        
        {versionControl.map((option, index) => (
          <div
            key={index}
            className={`option ${index === veresionControlOption ? 'active' : ''}`}
            style={{ background: `url(${option.backgroundUrl}) center/276px no-repeat #33383cd4` }}
            onClick={() => handleOptionClickVersionControl(index)}
          >
            <div className="label">
              <div className="icon">
                <h5>{option.iconLabel}</h5>                
              </div>              
            </div>
          </div>
        ))}
      </div>
      <div className='divTitleContainer'>
        <h2 className='backendTitle'>Agile Methodologies & Backlog</h2>
      </div>
      <div className="optionsSet">        
        {agileMetho.map((option, index) => (
          <div
            key={index}
            className={`option ${index === agileOption ? 'active' : ''}`}
            style={{ background: `url(${option.backgroundUrl}) center/276px no-repeat #33383cd4` }}
            onClick={() => handleOptionClickAgile(index)}
          >
            <div className="label">
              <div className="icon">
                <h5>{option.iconLabel}</h5>                
              </div>             
            </div>
          </div>
        ))}
      </div>
      <div className='divTitleContainer'>
        <h2 className='frontendTitle'>Cloud</h2>
      </div>
      <div className="optionsSet">        
        {cloud.map((option, index) => (
          <div
            key={index}
            className={`option ${index === cloudOption ? 'active' : ''}`}
            style={{ background: `url(${option.backgroundUrl}) center/276px no-repeat #33383cd4` }}
            onClick={() => handleOptionClickCloud(index)}
          >
            <div className="label">
              <div className="icon">
                <h5>{option.iconLabel}</h5>                
              </div>              
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
