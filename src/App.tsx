import * as React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Home, SearchResult } from "./components"
import ContextApi from "./utils/ContextApi"

export default function App() {
  return (
    <ContextApi>
      <Router>
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/:query" exact component={ SearchResult } />
        </Switch>
      </Router>
    </ContextApi>
  )
}