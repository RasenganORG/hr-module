import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
// import { createMemoryHistory, createBrowserHistory } from "history"

const mount = (el) => {
  const root = createRoot(el)
  root.render(<App />)
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#hr-dev-root")

  if (el) {
    mount(el)
  }
}

export { mount }
