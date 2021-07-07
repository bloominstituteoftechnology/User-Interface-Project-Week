import React, { Component } from 'react';
import './App.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div>
      <div class="navbar">
              <div class="dropdown">
                  <button class="dropbtn">Dropdown 
                      <i class="fa fa-caret-down"></i>
                  </button>
                  <div class="dropdown-content">
                      <a href="#">Link 1</a>
                      <a href="#">Link 2</a>
                      <a href="#">Link 3</a>
                  </div>
              </div>
      </div>
        <div class="image"></div>
      <div class="middle">
          <p>In construction</p>
      </div>
      <div class="footer">
           <p>
             Interested in starting a project?
           </p>
           <form>
             Lets Talk:<br/><br />
            <input type="text" name="firstname" placeholder="Enter your email address"/>
            <br/><br />
          </form> 
        
    </div> 
    </div>
      
  
    );
  }
}

export default App;
