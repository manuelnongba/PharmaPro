import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import AttendantPage from "./components/AttendantPage";
import Login from "./components/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import PrivateRoutesAttendant from "./utils/PrivateRoutesAttendant";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <PrivateRoutes />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route element={<AdminPage />} path="/admin/dashboard" exact />
            </Route>
            <Route element={<PrivateRoutesAttendant />}>
              <Route
                element={<AttendantPage />}
                path="/attendant/dashboard"
                exact
              />
            </Route>
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
