import React from "react"
import logo from "./logo.svg"
import "./App.css"
import { Provider } from "react-redux"
import InboxScreen from "components/pages/InboxScreen"
import { store } from "lib/store"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <InboxScreen />
      </Provider>
    </div>
  )
}

export default App
