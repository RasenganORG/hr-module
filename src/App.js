import "./App.css"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import RandomComp from "./components/RandomComp"
import Dashboard from "./components/Dashboard"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index path='/humanResources' element={<Dashboard />} />
          <Route exact path='/humanResources/1' element={<RandomComp />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
