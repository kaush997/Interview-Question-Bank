import React from 'react';
import '../style.css';
import NavigationBar from '../Components/Navigaion';
import imageSrc from '../Assets/welcomeimg.png';


function HomePO() {
  const containerStyle = {
    backgroundImage: `url(${imageSrc})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',        
    backgroundRepeat: 'no-repeat',      
    height: '110vh',                      
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
    
  };
  return (
    
      <div>
          <nav>
          <NavigationBar/>
        </nav>
    
      
    <div style={containerStyle} className="home-container">
      <div className='welcome-hedcont'>
      <div className='welcome-heading'>
      <h1>Welcome</h1>
      </div>
      <div className="sub-heading1">
       Interview Question Bank
      </div>
      <div className="sub-heading2">
       to Improve Your Knowledge
      </div>
      </div>
    </div>
    </div>
  );
}

export default HomePO;
