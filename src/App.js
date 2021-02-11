import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import {ThemeContext} from './theme-context'

function App() {
  // const {theme, toggle, dark} = React.useContext(ThemeContext)
  return (
    <div className="App">
             <header className="App-header"
                    // style = { {backgroundColor: theme.backgroundColor,
                    //           color: theme.color}}
                              >

        {/* <button type="button" onClick = {toggle} 
        style = { {backgroundColor: theme.backgroundColor,color: theme.color}}>
            Click here to toggle to {!dark ? 'dark' : 'light'} theme
        </button> */}
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> 
      </div>
  );
}

export default App;

 

// function App2(){
//   const date = new Date();
//    const abc = <h1>{ date.toLocaleTimeString() }
//    </h1>;

//    return abc;
// }




// setInterval( App2,1000);



////   render() {
//     return (      
//        <BrowserRouter>
//         <div>
//           <Navigation />
//             {/* <Switch> */}
//              <Route path="/" component={Home} exact/>
//              <Route path="/about" component={About}/>
//              <Route path="/contact" component={Contact}/>
            
//            {/* </Switch> */}
//         </div> 
//       </BrowserRouter>
//     );
//   }


