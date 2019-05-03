import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./styles/index.css"

import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import rootReducer from "./store/reducers/rootReducer"
import thunk from "redux-thunk"
import { reduxFirestore, getFirestore } from "redux-firestore"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import firebaseConfig from "./config/firebaseConfig"

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({
      getFirebase,
      getFirestore
    })),
    reactReduxFirebase(firebaseConfig),
    reduxFirestore(firebaseConfig)
  )
)

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>, 
  document.getElementById("root")
)
