// src/App.js

import React from 'react';
import Sidebar from './Sidebar';
import Maincontent from './Maincontent';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        
        <div className="col-md-1">
          <Sidebar />
        </div>

        
        <div className="col-md-11">
          <Maincontent />
        </div>
      </div>
    </div>
  );
};

export default App;
