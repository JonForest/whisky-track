import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom';
import './App.css';
import AddWhisky from './whisky/add-whisky';
import List from './whisky/list';
import Home from './home'

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active-link" to="/">Home</NavLink>
    <NavLink exact activeClassName="active-link" to="/whiskys">Whiskys</NavLink>
    <NavLink exact activeClassName="active-link" to="/whiskys/add">Add Whisky</NavLink>
  </nav>
)

class App extends Component {
  render() {
    console.log('hello')

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Router>
          <div>
            {/* Links also need to be inside the Router component */}
            <Links />
            {/* Only render the first matching route */}
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/whiskys" component={List} />
              <Route exact path="/whiskys/add" component={AddWhisky} />
              {/* We can use regex to limit the id to only numbers */}
              <Route exact path="/whiskys/:id(\d+)/edit" component={AddWhisky} />
              <Route render={() => <h1>Page Not Found</h1>} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
