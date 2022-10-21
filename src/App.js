import React, { Suspense } from "react"
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom"

const Root = () => (
  <div>
    <nav>
      <Link to='/hr-basics'>HR-basics</Link>
      <br />
      <Link to='/hr-info'>HR-info</Link>
    </nav>
    <Outlet />
  </div>
)

const App = () => {
  return (
    <div>
      <Suspense fallback={null}>
        <BrowserRouter basename='hr'>
          <Routes>
            <Route path={"/"} element={<Root />}>
              <Route path={"/hr-basics"} element={<h1>Basics</h1>} />
              <Route path={"/hr-info"} element={<h1>Info</h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default App
