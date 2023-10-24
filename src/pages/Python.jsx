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
    height: 'auto',                      
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
      Q1: What is Python, and how does it differ from other programming languages?
        <div className={`accordion-sign ${openQuestions.includes('question01') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question01') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question02')}>
      Q2: Explain the difference between Python 2 and Python 3?
        <div className={`accordion-sign ${openQuestions.includes('question02') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question02') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question03')}>
      Q3: What is PEP 8, and why is it important in Python development?
        <div className={`accordion-sign ${openQuestions.includes('question03') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question03') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q4: Explain the Global Interpreter Lock (GIL) in Python?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q5: What is a Python virtual environment, and why is it used?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q6: Explain the purpose of a decorator in Python?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q7: What is the difference between a list and a tuple in Python?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q8: Explain the purpose of the __init__ method in Python classes?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q9: What is the purpose of the Python with statement, and which Python feature does it relate to?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q10: How do you handle exceptions in Python, and what is the purpose of the try and except blocks?
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
