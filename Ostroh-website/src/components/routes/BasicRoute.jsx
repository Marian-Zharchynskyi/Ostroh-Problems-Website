import React, { memo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import HomePage from '../pages/home/HomePage';
import ErrorPage from '../errorPages/ErrorPage';
import NotFoundPage from '../NotFoundPage';
import CityMap from '../../CityMap';

const BasicRoute = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/CityMap" element={<CityMap />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
});

export default BasicRoute;
