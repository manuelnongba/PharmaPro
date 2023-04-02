import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminManageProducts from './AdminManageProducts';
import AdminPage from './AdminPage';
import AttendantPage from './AttendantPage';
import Transact from './Transact';
import Login from './LoginPage';
import LoginButton from './Login';
import PrivateRoutesAdmin from '../utils/PrivateRoutesAdmin';
import PrivateRoutesAttendant from '../utils/PrivateRoutesAttendant';
import Stock from './Stock';
import ManageUser from './ManageUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route element={<PrivateRoutesAdmin />}>
              <Route element={<AdminPage />} path="/admin/dashboard" exact />
              <Route
                path="/admin/manageproducts"
                exact
                element={<AdminManageProducts />}
              />
              <Route path="/admin/transact" exact element={<Transact />} />
              <Route path="/admin/stock" exact element={<Stock />} />
              <Route path="/admin/manageusers" exact element={<ManageUser />} />
            </Route>
            <Route element={<PrivateRoutesAttendant />}>
              <Route
                element={<AttendantPage />}
                path="/attendant/dashboard"
                exact
              />
              <Route element={<Transact />} path="/attendant/transact" exact />
              <Route path="/admin/stock" exact element={<Stock />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<LoginButton />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
