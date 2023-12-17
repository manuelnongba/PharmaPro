import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transact from './containers/products/Transact';
import PrivateRoutesAdmin from './utils/PrivateRoutesAdmin';
import PrivateRoutesAttendant from './utils/PrivateRoutesAttendant';
import AttendantDashboard from './containers/users/AttendantDashboard';
import ManageProducts from './containers/products/ManageProducts';
import AdminDashboard from './containers/users/AdminDashboard';
import Login from './containers/authentication/Login';
import LoginPage from './containers/authentication/LoginPage';
import Stock from './containers/products/Stock';
import ManageUser from './containers/users/ManageUser';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route element={<PrivateRoutesAdmin />}>
              <Route
                element={<AdminDashboard />}
                path="/admin/dashboard"
                exact
              />
              <Route
                path="/admin/manageproducts"
                exact
                element={<ManageProducts />}
              />
              <Route path="/admin/transact" exact element={<Transact />} />
              <Route path="/admin/stock" exact element={<Stock />} />
              <Route path="/admin/manageusers" exact element={<ManageUser />} />
            </Route>
            <Route element={<PrivateRoutesAttendant />}>
              <Route
                element={<AttendantDashboard />}
                path="/attendant/dashboard"
                exact
              />
              <Route element={<Transact />} path="/attendant/transact" exact />
              <Route path="/admin/stock" exact element={<Stock />} />
            </Route>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<LoginPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
