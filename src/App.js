import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewsApp from './components/NewsApp';
import LoginPage from './components/LoginPage'; // Create LoginPage component
import SignupPage from './components/SignupPage'; // Create LoginPage component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={NewsApp} />
        <Route path="/login" exact component={LoginPage}/>
        <Route path="/signup" exact component={SignupPage}/>
      </Switch>
    </Router>
    // <NewsApp/>
  );
}

export default App;
