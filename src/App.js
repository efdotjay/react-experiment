
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { ComponentA } from './components';

export default class App extends React.Component {
  state = {
    logArgs: true,
    showA: false
  };

  toggleLogArgsHandler = () => {
    this.setState(state => ({ logArgs: !state.logArgs }));
  };

  toggleAHandler = () => {
    this.setState(state => ({ showA: !state.showA }));
  };

  render() {
    const { logArgs, showA } = this.state;

    return (
      <div className="App">
        <h1>React Component Lifecycle</h1>
        <label htmlFor="log-args-ckbx"><input type="checkbox" id="log-args-ckbx" checked={logArgs} onClick={this.toggleLogArgsHandler} readOnly={true}/> log arguments</label>
        <br /><br />
        <button onClick={this.toggleAHandler}>{showA ? 'Unmount' : 'Mount'} Component A</button>
        <br /><br /><hr /><br /><br />
        {showA && <ComponentA {...{logArgs}}/>}
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
