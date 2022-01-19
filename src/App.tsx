import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MainPage from './Pages/MainPage';
import TasksPage from './Pages/TasksPage';

function App() {


  return (
   <Router>
     <Switch>
     <Route  exact path="/" component={MainPage}/>
     <Route  path="/mytodos" component={TasksPage}/>
     </Switch>
   </Router>
  );
}

export default App;
