import React from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {
  return (

      <div>
        <Nav />
        <main>
            <Header />   
            <Project />
            <Footer /> 
        </main>
      
      </div>
  
    );
  }

export default App;





// function App() {
//   return (

    
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;