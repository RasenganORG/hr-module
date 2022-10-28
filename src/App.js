import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LayoutPage from './components/layoutPage/LayoutPage';
import Employee from './components/pages/employees/Employee';
import Employees from './components/pages/employees/Employees';

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <BrowserRouter basename='hr'>
          <Routes>
            <Route path={'/'} element={<LayoutPage />}>
              <Route index element={<h1>Dashboard</h1>} />
              <Route path={'employees'} element={<Employees />} />
              <Route path={'employees/:employeeId'} element={<Employee />} />
              <Route path={'report'} element={<h1>Report</h1>} />
              <Route path={'calendar'} element={<h1>Calendar</h1>} />
            </Route>
            <Route
              path={'*'}
              element={<h1>404 internii nu au gasit pagina</h1>}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
