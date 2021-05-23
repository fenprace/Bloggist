import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Issue } from './components'
import './index.css'
import { issues } from './model'
import Posts from './pages/Posts'

const Root = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/posts/:id">
          <Posts />
        </Route>

        <Route path="/">
          <div className="issue-list">
            {issues.slice(0, 10).map(i => (
              <Issue key={i.id} issue={i} />
            ))}
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
