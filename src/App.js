import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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

function App2(){
  const date = new Date();
   const abc = <h1>{ date.toLocaleTimeString() }
   </h1>;

   return abc;
 
}
export default App;



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


