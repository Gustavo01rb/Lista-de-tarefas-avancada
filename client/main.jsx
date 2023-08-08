import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import Routes from '../imports/routes/routes';
import GlobalStyle from '../imports/ui/global/style';

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));
  root.render(
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
});
