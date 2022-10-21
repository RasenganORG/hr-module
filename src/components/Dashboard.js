import React from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>HR Dashboard</h1>
      <button onClick={() => navigate("/hr")}>hey</button>
      <button onClick={() => navigate("/hr/1")}>1</button>
    </div>
  )
}

export default Dashboard
