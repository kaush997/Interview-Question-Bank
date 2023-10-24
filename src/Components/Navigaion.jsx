import React from 'react';
import '../Components.css'; 



const NavigationBar = () => {


  return (
    <nav className="navbar">
      <div className="navbar-left">
        
      </div>
      <div className="navbar-center mt-2" >
        <ul className="navbar-links ">
          <li><a href="/">Home</a></li>
          <li><a href="/Python">Python</a></li>
          <li><a href="/Java">Java</a></li>
          <li><a href="/PHP">PHP</a></li>
          <li><a href="/SQL">SQL</a></li>
          
        
        </ul>
      </div>
      <div className="navbar-right" style={{ marginRight: '20px' }}>
</div>
     
      
    </nav>
  );
};

export default NavigationBar;