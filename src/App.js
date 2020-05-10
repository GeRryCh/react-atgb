import React, { Fragment } from 'react';
import './App.css';
import 'tachyons'

function App() {
  return (
    <div className='tc'>
      <header>Are things getting any better in US?</header>
      <h1>YES</h1>
      <h2>Aren't all the information and news regarding COVID-19 situation make you anxious and probably sad
      while the only information you are looking for is if the situation has improved or not?
      Then this site is for you! It shows yes/no answer to the main question of today.
        </h2>
      <footer>
        For more information check <a href='https://www.worldometers.info/coronavirus/'>Corona Virus Updates</a>
      </footer>
    </div>
  );
}

export default App;