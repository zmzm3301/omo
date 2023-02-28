import React from 'react';
import { Route, Routes } from 'react-router-dom';

export default function redirect() {
  return (
    <div>
      <Routes>
          <Route path="/*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    </div>
  );
}