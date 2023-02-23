import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Subjects from './components/Subjects';
import Lists from './components/Lists';

function App() {
  const [subject, setSubject] = useState(0);
  const onChange = (subject: number): void => {
    setSubject(subject);
  }
  return (
    <div className="App">
      <Header sitename="typescript" onChange={onChange}/>
      <Subjects onChange={onChange}/>
      <Lists subject={subject}/>
    </div>
  );
}

export default App;
