import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Menu } from './components/Menu';
import { CounterContextProvider } from './contexts/CounterContext';
import { Abc } from './templates/Abc';
import Home from './templates/Home';
import { Page404 } from './templates/Page404';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CounterContextProvider>
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/abc/:slug?/:id?" component={Abc} />
        <Route path="/" component={Home} exact />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  </CounterContextProvider>,
);
