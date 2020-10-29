import React from 'react';
import { Router, Link, Switch, Route } from './router';

const App: React.FC = function App() {
  return (
    <Router>
      <Link to="/foo">foo</Link>
      <Link to="/bar">bar</Link>

      <Switch>
        <Route path="/foo">foo</Route>
        <Route path="/bar">bar</Route>
        <Route path="/">home</Route>
      </Switch>
    </Router>
  );
};

export default App;
