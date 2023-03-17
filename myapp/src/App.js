// import logo from './logo.svg';            //Jalil: hashed it to we don't receive a warning on compiling (because we did not use logo - see below hased out code)
import About from './About';
import About1 from './About1';
import About2 from './About2';
import './App.css';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // 
  const jalilUser = 'JALIL'
  const jalilNumber = 3
  const JalilInsideFunc=(id)=>{
    return "Jalil inner function " + id
  }
  return (
    <div>
      Hello Jalil and {" "}          {jalilUser} {" "} your number is {jalilNumber * 2}
      <About></About>
      <About1></About1>
      <About2></About2>
      <About2></About2>
      <About2/>
      <About2/>
      {JalilInsideFunc(100)}
    </div>

  );
}

export default App;
