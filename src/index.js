import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
// import {ThemeProvider} from './theme-context.js'
import {BrowserRouter, Route, Switch, Link} 
from 'react-router-dom';
import { render } from '@testing-library/react';


class navLinks extends React.Component{
  render(){
    return (
  <div>
    <Link to = "/">Home</Link>
    <Link to = "/about">About us</Link>

  </div>
    );
  }
}



class Home extends React.Component{
  render(){
    return(
    <div>
      <navLinks/>
      <marquee>
        we are into the home page
      </marquee>
    </div>
        )

  }
}

class About extends React.Component{
  render(){
    return(
    <div>
      
      
      <marquee>
        we are into the about page
      </marquee>
    </div>
        )

  }
}


ReactDOM.render(
    
 <BrowserRouter>
<Switch>
    <Route path = "/" component={Home}/>
    <Route path = "/about" component={About}/>
  </Switch>
  </BrowserRouter>,
document.getElementById('root')
);





// ReactDOM.render(
//   <React.StrictMode>
//     {/* <ThemeProvider> */}
//           <App/>
//           <About/>
//     {/* </ThemeProvider> */}
          
//   </React.StrictMode>,
//   document.getElementById('root')
 
// );







reportWebVitals();








// function update(){

// }



// setInterval( update ,1000);


// class App2 extends Component {
//   render(){
//     return (

//       <table_had/>

//       // <div className="had">
//       //   <h2>Welcome to HAD - React</h2>
//       // </div>
//       // <Table/>
//     )
//   }
// }



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


