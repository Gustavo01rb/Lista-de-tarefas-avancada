import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Routes from '../imports/routes/routes'

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  root.render(<Routes />);
});
