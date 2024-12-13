import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import HairStyling from './HairStyling';
import Modal from 'react-modal';
import LashesMenu from './LashesMenu';
import Layout from './components/layout';
import NotFound from './components/not-found';

// Set the app element for accessibility
Modal.setAppElement('#root');

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hair-styling" component={HairStyling} />
          <Route path="/lashes-menu" component={LashesMenu} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
