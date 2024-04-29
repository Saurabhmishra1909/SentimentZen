import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
import Songs from './Songs';
// import Chart from './Chart';
import Startt from './Startt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body>
      {/* <Chart /> */}
      <Startt/>
     {/* <Songs />  */}
    </body>
  </React.StrictMode>
);
