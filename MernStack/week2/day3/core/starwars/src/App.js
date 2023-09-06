import React from 'react';
import { Router, Route,  } from 'react-router-dom';
import App from './App';
import Character from './Character';
import Planet from './Planet';

function AppRouter() {
  return (
    <div>
    <Router>
      
        <Route exact path="/" component={App} />
        <Route path="/people/:id" component={Character} />
        <Route path="/planets/:id" component={Planet} />
        
      
    </Router>
    </div>
  );
}

export default AppRouter;

