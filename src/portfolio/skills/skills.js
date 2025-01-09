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
      backgroundUrl: 'https://setecompu.com/wp-content/uploads/2018/07/C-Sharp.png',
      title: 'C#',
      iconLabel: 'C#'
    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/1024px-.NET_Core_Logo.svg.png',
      title: '.NET',
      iconLabel: '.NET'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWY6XG3t94PxBtbOoXYCN9yte4qAiyQwjYA4sABvaqSUehBVvKrsyyS0-NY0g_arraH6A&usqp=CAU',
      title: 'Entity Framework',
      iconLabel: 'EF'
    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.svgrepo.com/show/354420/swagger.svg',
      title: 'Swagger',
      iconLabel: 'SW'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
      title: 'Postman',
      iconLabel: 'PM'
    },
    {
     subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://pnghq.com/wp-content/uploads/pnghq.com-sql-server-download-png-w-3-334x350.png',
      title: 'SQL',
      iconLabel: 'SQL'
    },    
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.sovereignconsult.com/wp-content/uploads/2020/03/RestApi.png',
      title: 'RESTFull API',
      iconLabel: 'API'
    }   
  ];

  const frontEndTech = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/353396/angular-icon.svg',
      title: 'Angular',
      iconLabel: 'A'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://static-00.iconduck.com/assets.00/react-icon-1024x1024-wwxwlds8.png',
      title: 'React',
      iconLabel: 'R'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/349419/javascript.svg',
      title: 'JavaScript',
      iconLabel: 'JS'
    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.svgrepo.com/show/349540/typescript.svg',
      title: 'TypeScript',
      iconLabel: 'TS'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://www.svgrepo.com/show/452228/html-5.svg',
      title: 'HTML',
      iconLabel: 'HTML'
    },
    {
      subLabel: 'Arcu cursus vitae congue mauris',
      iconClass: 'fas fa-snowflake',
      backgroundUrl: 'https://www.svgrepo.com/show/452185/css-3.svg',
      title: 'CSS',
      iconLabel: 'CSS'
    }    
  ];

  const versionControl = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://cdn-icons-png.flaticon.com/512/25/25231.png',
      title: 'GitHub',
      
      iconLabel: 'GH'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      title: 'Git',
      
      iconLabel: 'Git'
    } 
  ];

  const agileMetho = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://miro.medium.com/v2/resize:fit:400/0*KpzqUReoWU_DEwb5.png',
      title: 'SCRUM',
      
      iconLabel: 'S'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrb84R83l6mWa_fhIj47sctMrcrCyoJpYDGg&s',
      title: 'JIRA',
      
      iconLabel: 'Jira'
    } 
  ];

  const cloud = [
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png',
      title: 'AWS',
      
      iconLabel: 'AWS'
    },
    {
      subLabel: 'Elit ut aliquam purus sit',
      iconClass: 'fas fa-walking',
      backgroundUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-azure-logo-icon-download-in-svg-png-gif-file-formats--microsoft-destination-brand-logos-pack-icons-1583129.png?f=webp&w=256',
      title: 'Azure',
      
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
