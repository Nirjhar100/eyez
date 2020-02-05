import React,{Component} from 'react';
import NavigateBar from './components/layout/NavigateBar';
import About from './components/layout/About';
import Home from './components/layout/Home';
import Contact from './components/layout/Contact';
import FooterBar from './components/layout/Footer'
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="App">
          <div >
          <NavigateBar/>
          </div>
          <Route exact path = '/' component= {Home} />
          <Route path = '/about' component= {About} />
          <Route path = '/contact' component= {Contact} />
        </div>
          <div className="footer">
          <FooterBar/>
          </div>
       
      </BrowserRouter>
      
    )
  }
}


export default App;
