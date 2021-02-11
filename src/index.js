import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './App';
import {ThemeProvider} from './theme-context.js'
// import Shopping from './shoppingList';
import MagicShop from './magicshop_useffect';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
          <MagicShop/>
    </ThemeProvider>
          
  </React.StrictMode>,
  document.getElementById('root')
 
);

// function update(){

// }



// setInterval( update ,1000);

reportWebVitals();

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


