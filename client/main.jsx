import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createRoot } from 'react-dom/client'; 
import AppRoutes from '../imports/routes/routes'
import GlobalStyle from '../imports/ui/themes/globalStyle'

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  root.render(
    <>
      <GlobalStyle>
        <AppRoutes />
      </GlobalStyle>
    </>
  );
});
