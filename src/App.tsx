import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage';
import TasksPage from './Pages/TaskPage/TasksPage';

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
