import React from 'react';
import { mount } from 'react-mounter';

import AppLayout from '../../ui/layouts/app.jsx';
import HomePage from '../../ui/pages/home-page.jsx';
import StopwatchPage from '../../ui/containers/stopwatch-container.js';

FlowRouter.route("/", {
  name: "Home",
  action() {
    mount(AppLayout, {
      content: <HomePage />
    });
  }
});

FlowRouter.route('/stopwatch/:_id', {
  name: 'Stopwatch',
  action(params) {
    mount(AppLayout, {
      content: <StopwatchPage _id={params._id} />
    });
  }
});
