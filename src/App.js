import './App.css'


function App() {
  return (
    <div className="App">
        
        <div className="bg-image"></div>
        <h1 className="main_title"><span className="blinking">PHISHECTOR</span></h1>
		
        
        <div className="ta-c" >
            <input type="checkbox" id="1" className="vh" />
            <label for="1">Copy URL</label>
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
