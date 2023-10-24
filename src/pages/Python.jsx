import React, { useState } from 'react';
import '../style.css';
import NavigationBar from '../Components/Navigaion';

const Python = () => {
  const [openQuestions, setOpenQuestions] = useState([]);

  const toggleQuestion = (question) => {
    if (openQuestions.includes(question)) {
      setOpenQuestions(openQuestions.filter((q) => q !== question));
    } else {
      setOpenQuestions([...openQuestions, question]);
    }
  };

  const containerStyle = {
    
    backgroundSize: 'cover',
    backgroundPosition: 'center',        
    backgroundRepeat: 'no-repeat',      
    height: '87vh',                      
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B0D9B1',
    
    
  };

  return (
    <div >
        <nav>
          <NavigationBar/>
        </nav>
    <div style={containerStyle} className="home-container">
    <div className="accordion">
      <div className="accordion-question" onClick={() => toggleQuestion('question01')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question01') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question01') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question02')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question02') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question02') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question03')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question03') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question03') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
    </div>
    </div>
    </div>
  );
};

export default Python;
