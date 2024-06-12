import React from 'react';
import './App.css';
import Home from './components/Home';
import Instructor from './components/Instructor';
import InstructorList from './components/instructorList';
import Request from './components/Request';
import EventActions from './components/EventActions';
import LoginCheck from './components/LoginCheck';
import ReducerExemple from './components/ReducerExample';
import ContextExemple from './components/ContextExemple';
import { ThemeContextProvider } from './components/ThemeContext';
import RefExemple from './components/RefExample';

function App() {

  const instructor = {
    firstName: 'Hüseyin',
    lastName: 'Abacı',
  };

  const instructorList = [{
    firstName: 'Hüseyin',
    lastName: 'Abacı',
  }, {
    firstName: 'Canan',
    lastName: 'Abacı',
  }, {
    firstName: 'Osman',
    lastName: 'Abacı',
  }]

  return (
    <div className="App">
      {/* <Home name="Hüseyin Abacı" courseNumber={15} isBest />
      <Instructor instructorNameLastName={instructor} />
      <InstructorList instructorNameLastNameList={instructorList} />
      <Request status="Success" />
      <EventActions /> */}
      {/* <LoginCheck /> */}
      {/* <ReducerExemple />
      <ThemeContextProvider>
        <ContextExemple />
      </ThemeContextProvider> */}
      <RefExemple />
    </div>
  );
}

export default App;
