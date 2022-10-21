import React, { Suspense } from "react"
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom"
import LayoutPage from "./components/layoutPage/LayoutPage"

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <BrowserRouter basename='hr'>
          <Routes>
            <Route path={"/"} element={<LayoutPage />}>
              <Route index element={<h1>Dashboard</h1>} />
              <Route path={"/employees"} element={<h1>Employees</h1>} />
              <Route path={"/employees/:id"} element={<h1>Employee</h1>} />
              <Route path={"/report"} element={<h1>Report</h1>} />
              <Route path={"/calendar"} element={<h1>Calendar</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
