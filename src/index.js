import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainPage from './03_0830/MainPage';
import reportWebVitals from './reportWebVitals';
import MapPage from './03_0830/MapPage';
import Parent from './03_0830/Parent';
import Parent2 from './03_0830/Parent2';
import Counter from './03_0830/Counter';
import Game from './03_0830/Game';
import Header from './03_0830/Header';
import Main from './03_0830/Main';
import Test_0830 from './03_0830/Test_0830';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    <Header />
    <Test_0830 />

    <hr />
    <Game />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
