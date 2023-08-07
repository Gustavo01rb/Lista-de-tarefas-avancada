import { Meteor } from 'meteor/meteor';
import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { App } from '/imports/ui/App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));

  root.render(
    <BrowserRouter>
      <Routes> 
        <Route exact path="/" element={<App />} /> 
      </Routes>
    </BrowserRouter>
  );
});
