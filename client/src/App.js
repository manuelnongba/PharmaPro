import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminManageProducts from "./components/AdminManageProducts";
import AdminPage from "./components/AdminPage";
import AttendantPage from "./components/AttendantPage";
import AttendantTransact from "./components/AttendantTransact";
import Login from "./components/Login";
import LoginButton from "./components/LoginButton";
import PrivateRoutes from "./utils/PrivateRoutes";
import PrivateRoutesAttendant from "./utils/PrivateRoutesAttendant";

const App = () => {
  const [tS, setTs] = useState(10);

  console.log(tS);
  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route
                element={<AdminPage totalSales={tS} />}
                path="/admin/dashboard"
                exact
              />
              <Route
                path="/admin/manageproducts"
                exact
                element={<AdminManageProducts />}
              />
            </Route>
            <Route element={<PrivateRoutesAttendant />}>
              <Route
                element={<AttendantPage setTs={setTs} />}
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
