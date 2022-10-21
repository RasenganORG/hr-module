import React from "react"
import { useNavigate, useParams } from "react-router-dom"

function RandomComp() {
  const params = useParams()
  const navigate = useNavigate()

  console.log(params)

  return (
    <div>
      <h1>Radnom comp {params.id}</h1>
      <button onClick={() => navigate("/hr")}>hey</button>
      <button onClick={() => navigate("/hr/1")}>1</button>
    </div>
  )
}

export default RandomComp
