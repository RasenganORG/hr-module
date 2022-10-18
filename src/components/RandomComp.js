import React from "react"
import { useNavigate, useParams } from "react-router-dom"

function RandomComp() {
  const params = useParams()
  const navigate = useNavigate()

  console.log(params)

  return (
    <div>
      <h1>Radnom comp {params.id}</h1>
      <button onClick={() => navigate("/humanResources")}>hey</button>
      <button onClick={() => navigate("/humanResources/1")}>1</button>
    </div>
  )
}

export default RandomComp
