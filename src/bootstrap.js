import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

const mount = (el) => {
  const root = createRoot(el)
  root.render(<App />)
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#human-resources-root")

  if (el) {
    mount(el)
  }
}

export { mount }
