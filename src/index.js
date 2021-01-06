import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Table_had, {Table} from './Table';
import reportWebVitals from './reportWebVitals';


class App2 extends Component {
  render(){
    return (

      <table_had/>

      // <div className="had">
      //   <h2>Welcome to HAD - React</h2>
      // </div>
      // <Table/>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Table />
     <Table_had />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




 