import React from 'react';
import { Meteor } from 'meteor/meteor';

const Home = () => {
  const logout = () => Meteor.logout();

  const user = Meteor.user();

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home</h1>
      <p>{user.profile.name}</p>
      <img src={user.profile.profileImage} alt="Profile" />
      <p>{user.profile.company}</p>
      <p>{user.profile.date}</p>
      <p>{JSON.stringify(user.profile)}</p>
      <div className="user" onClick={logout}>
        🚪
      </div>
    </div>
  );
};

export default Home;
