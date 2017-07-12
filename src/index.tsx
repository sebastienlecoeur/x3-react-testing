import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Hello from './components/Hello';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

ReactDOM.render(
  <Hello name="Sébastien" enthusiasmLevel={3} />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
