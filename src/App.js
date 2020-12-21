import React from 'react';
import './App.css';
import Home from './components/home';
import About from './components/about';
import SignUp from './components/SingUp';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp}/>
        <Route path="/dashboard" component={Dashboard}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
