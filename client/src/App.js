import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminManageProducts from "./components/AdminManageProducts";
import AdminPage from "./components/AdminPage";
import AttendantPage from "./components/AttendantPage";
import AttendantTransact from "./components/AttendantTransact";
import Login from "./components/LoginPage";
import LoginButton from "./components/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import PrivateRoutesAttendant from "./utils/PrivateRoutesAttendant";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<AdminPage />} path="/admin/dashboard" exact />
              <Route
                path="/admin/manageproducts"
                exact
                element={<AdminManageProducts />}
              />
            </Route>
            <Route element={<PrivateRoutesAttendant />}>
              <Route
                element={<AttendantPage />}
                path="/attendant/dashboard"
                exact
              />
              <Route
                element={<AttendantTransact />}
                path="/attendant/transact"
                exact
              />
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
