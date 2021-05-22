import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Issue from './components/Issue'
import { issues } from './model'

const Root = () => {
  return (
    <div>
      {issues.slice(0, 10).map(i => (
        <Issue key={i.id} issue={i} />
      ))}
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))
