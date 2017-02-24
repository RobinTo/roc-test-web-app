import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../screens/app';

const importStart = (nextState, cb) => {
  require.ensure(['../screens/start'], function(require){cb(null, require("../screens/start").default);})
};
const importAbout = (nextState, cb) => {
  require.ensure(['../screens/about'], function(require){cb(null, require('../screens/about').default);})
};

export default () => (
  <Route component={ App }>
    <IndexRoute getComponents={ importStart } />
    <Route getComponents={ importAbout } path="/about/" />
  </Route>
);

if (module.hot) {
  require('../components/start');    // eslint-disable-line global-require
  require('../components/about');   // eslint-disable-line global-require
}
