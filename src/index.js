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
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, { attachAuthIsReady: true })
  )
)

store
  .firebaseAuthIsReady
  .then(() => {
    ReactDOM.render(
      <Provider store={ store }>
        <App store={ store } />
      </Provider>, 
      document.getElementById("root")
    )
  })