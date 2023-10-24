import React from 'react';
import '../style.css';
import NavigationBar from '../Components/Navigaion';


function HomePO() {
  const containerStyle = {
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',        
    backgroundRepeat: 'no-repeat',      
    height: '87vh',                      
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',  
    
  };
  return (
    
      <div>
          <nav>
          <NavigationBar/>
        </nav>
    
      
    <div style={containerStyle} className="home-container">
      <div className='welcome-heading'>
      <h1>Welcome</h1>
      </div>
      <div className="sub-heading1">
        To Interview Question Bank
      </div>
      <div className='sub-heading2'>
       
      </div>
    </div>
    </div>
  );
}

export default HomePO;
