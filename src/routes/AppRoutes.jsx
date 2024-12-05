import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import NewUser from '../pages/NewUser';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-user" element={<NewUser />} />
    </Routes>
  );
};

export default AppRoutes;
