
import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { ComponentA } from './components';

export default class App extends React.Component {
  state = {
    logArgs: true
  };

  toggleLogArgsHandler = () => {
    this.setState(state => ({ logArgs: !state.logArgs }));
  }

  render() {
    const { logArgs } = this.state;

    return (
      <div>
        <h2>React lifecycle methods <sub>new</sub></h2>
        <label htmlFor="log-args-ckbx"><input type="checkbox" id="log-args-ckbx" checked={logArgs} onClick={this.toggleLogArgsHandler} readOnly={true}/> Log arguments.</label>
        <ComponentA {...{logArgs}}/>
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
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
