import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="App">
        
        <div className="bg-image"></div>
        <h1 className="main_title"><span className="blinking">PHISHECTOR</span></h1>
        <div className="fnt_center blinking">
         <FontAwesomeIcon icon={faUserSecret} />
        </div>
        
        
        <div className='data_elements'>
            <div>
                <input type="text" value="Enter URL" style={{fontSize: '20px'}} />
                <button className="button_slide slide_right" >GO</button>
                 
            </div>
            
        </div>
        <div className="abtus" />
		  <button className="button_slide_visit slide_right_visit" >VISIT US </button>
    </div>
  );
}

export default App;
