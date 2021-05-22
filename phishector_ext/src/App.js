import './App.css'

import React, { Component} from "react";
import axios from 'axios';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  state = {
    url: '',
    result:'',
  }

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


urlResult = e => {
  e.preventDefault();
  const { url } = this.state;
  const urls = {
    url
  }
  axios
    .post('http://localhost:3001/create', urls)
    .then((response) => {
      console.log(response.data);
      this.setState({result: response.data})
    });
  
}

render(){
  return (
    <div className="App">
        
    <div className="bg-image"></div>
    <h1 className="main_title"><span className="blinking">PHISHECTOR</span></h1>
    <div className="fnt_center blinking">
     <FontAwesomeIcon icon={faUserSecret} />
    </div>
        <div className='data_elements'>
            <div>
              <form onSubmit={this.urlResult}>
                  <input 
                  className="css-input" 
                  type="text" 
                  name="url"
                  value={this.state.url}  
                  placeholder="Enter URL to detect" 
                  onChange={this.onInputChange}
                />
                <button className="button_slide slide_right"  type="submit">GO</button>
              </form>
              <div className="res">
                <h2>{this.state.result} </h2>
            </div>
          </div>
            
        </div>
        <div className="abtus" />
		  <button className="button_slide_visit slide_right_visit" >VISIT US </button>
    </div>
  );
}

}
export default App;