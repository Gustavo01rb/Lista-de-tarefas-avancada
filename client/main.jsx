import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client'; 
import AppRoutes from '../imports/routes/routes'

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  root.render(
    <>
      <AppRoutes />
    </>
  );
});
