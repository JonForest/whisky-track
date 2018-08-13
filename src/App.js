import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, NavLink, Redirect, Switch} from 'react-router-dom';
import './App.css';
import { routes, redirects } from './routes'

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
    <NavLink exact activeClassName="active-link" to="/whiskies">Whiskies</NavLink>
    <NavLink exact activeClassName="active-link" to="/whiskies/add">Add Whisky</NavLink>
  </nav>
)

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Whisky Track</h1>
        </header>
        <main>
          {/* Links also need to be inside the Router component */}
          <Links />
          {/* Only render the first matching route */}
          <Switch>
            {redirects.map((redirect, i) => (<Redirect key={i} {...redirect} />))}
            {routes.map((route, i) => (<Route key={i} {...route} />))}
          </Switch>
        </main>
      </div>
      </Router>
    );
  }
}

export default App;
