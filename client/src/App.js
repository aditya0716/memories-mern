import './App.css';
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from 'react-router-dom';
import {Container} from '@material-ui/core';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Router>
      <div className="app">
        <Container maxWidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}

export default App;
