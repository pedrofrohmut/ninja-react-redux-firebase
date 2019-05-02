import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./styles/index.css"

import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "./store/reducers/rootReducer"

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById("root")
)
