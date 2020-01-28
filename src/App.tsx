import React from 'react';
import HogeContainer from './containers/HogeContainer'
import './App.css';
import { HogeHooksComponent } from './components/HogeHooksComponent';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <b>container:</b>
        <HogeContainer />
      </div>
      <div>
        <b>hooks:</b>
        <HogeHooksComponent />
      </div>
    </div>
  );
}

export default App;
