import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import HairStyling from './HairStyling';
import Modal from 'react-modal';
import MakeupMenu from './MakeupMenu';
import NailsMenu from './NailsMenu';
import Gallery from './Gallery';
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
          <Route path="/makeup" component={MakeupMenu} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/nails" component={NailsMenu} />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
