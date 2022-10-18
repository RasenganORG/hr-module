import React from "react"

const Dashboard = React.lazy(() => import("./components/Dashboard"))
const RandomComp = React.lazy(() => import("./components/RandomComp"))
const routes = [
  {
    path: "",
    component: Dashboard,
    index: true,
    exact: true,
  },
  {
    path: "1/:id",
    component: RandomComp,
    index: false,
    exact: true,
  },
]

export default routes
