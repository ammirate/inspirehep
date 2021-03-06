import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import DashboardPage from './containers/DashboardPage';
import ExceptionsPage from './containers/ExceptionsPage';
import InspectPage from './containers/InspectPage';
import {
  HOLDINGPEN_DASHBOARD,
  HOLDINGPEN_EXCEPTIONS,
  HOLDINGPEN_INSPECT,
  HOLDINGPEN,
} from '../common/routes';
import SafeSwitch from '../common/components/SafeSwitch';

class Holdingpen extends Component {
  render() {
    return (
      <div className="w-100">
        <SafeSwitch>
          <Redirect exact from={HOLDINGPEN} to={HOLDINGPEN_DASHBOARD} />
          <Route exact path={HOLDINGPEN_DASHBOARD} component={DashboardPage} />
          <Route
            exact
            path={HOLDINGPEN_EXCEPTIONS}
            component={ExceptionsPage}
          />
          <Route
            exact
            path={`${HOLDINGPEN_INSPECT}/:id`}
            component={InspectPage}
          />
        </SafeSwitch>
      </div>
    );
  }
}

export default Holdingpen;
