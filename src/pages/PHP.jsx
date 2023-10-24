import React, { useState } from 'react';
import '../style.css';
import NavigationBar from '../Components/Navigaion';

const PHP = () => {
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
      Q1: What is PHP, and what does it stand for?
        <div className={`accordion-sign ${openQuestions.includes('question01') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question01') && (
        <div className="accordion-answer">PHP stands for "Hypertext Preprocessor." It is a server-side scripting language commonly used for web development to create dynamic web pages.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question02')}>
      Q2: What is the difference between PHP and client-side scripting languages like JavaScript?
        <div className={`accordion-sign ${openQuestions.includes('question02') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question02') && (
        <div className="accordion-answer">PHP is a server-side scripting language, which means it runs on the web server and generates HTML to be sent to the client's browser. JavaScript, on the other hand, is a client-side scripting language executed within the browser.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question03')}>
      Q3: Explain the difference between include and require in PHP.
        <div className={`accordion-sign ${openQuestions.includes('question03') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question03') && (
        <div className="accordion-answer">Both include and require are used to include external files in PHP. The key difference is that if the file specified in require is not found, it will produce a fatal error and halt script execution. include, on the other hand, will only produce a warning and continue execution.</div>
      )}

      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q4: What is the purpose of the $_POST and $_GET superglobal arrays in PHP?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">$_POST is used to collect form data sent with the HTTP POST method, while $_GET is used to collect data sent with the HTTP GET method. They allow you to access user inputs submitted through forms or appended to URLs.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
      Q5: Explain what a session is in PHP and how it differs from a cookie?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A session is a way to store data on the server that is associated with a specific user and persists across multiple web pages. It is often used to maintain user login status and store user-specific data. Cookies, on the other hand, are stored on the user's browser and can be used to store small amounts of data.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
        <div className="accordion-answer">A Criminal Identification System is a comprehensive software solution designed to aid law enforcement agencies and criminal justice systems in the identification and tracking of criminals. It utilizes various technologies, such as biometrics, facial recognition, and fingerprint matching, to accurately identify individuals involved in criminal activities.</div>
      )}
      <div className="accordion-question" onClick={() => toggleQuestion('question04')}>
        What is criminal identification system ?
        <div className={`accordion-sign ${openQuestions.includes('question04') ? 'open' : 'close'}`}></div>
      </div>
      {openQuestions.includes('question04') && (
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

export default PHP;
