import React from 'react';
import Home from "./app/routes/Home";
import AddWhisky from "./app/routes/Whiskies/routes/Add";
import Whiskies from './app/routes/Whiskies'
import Edit from './app/routes/Whiskies/routes/Whisky/routes/Edit'
// import { Route, Switch } from 'react-router-dom';

// export default (
//   <Switch>
//     <Route exact path="/" component={Home} />
//     <Route exact path="/whiskys" component={Whiskys} />
//     <Route exact path="/whiskys/add" component={AddWhisky} />
//     {/* We can use regex to limit the id to only numbers */}
//     <Route exact path="/whiskys/:id(\d+)/edit" component={AddWhisky} />
//     <Route render={() => <h1>Page Not Found</h1>} />
//   </Switch>
// )

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/whiskies',
    component: Whiskies,
    exact: true
  },
  {
    path: '/whiskies/add',
    component: AddWhisky,
    exact: true
  },
  {
    exact: true,
    path: '/whiskies/:id(\\d+)/edit', // For some reason, when loading from config, regex must be escaped again
    component: Edit,
  },
  {
    render: () => (<h1>Page Not Found</h1>)
  }
]

const redirects = [
  {
    from: '/bourbons',
    to: '/whiskies'
  },
  {
    from: '/tea',
    to: '/whiskies'
  }
]

export { routes, redirects }