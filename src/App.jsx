import React from 'react'
// see https://github.com/gaearon/react-hot-loader
import { hot } from 'react-hot-loader'

class App extends React.Component {
  render () {
    return (
      <div>Hello World!</div>
    )
  }
}

export default hot(module)(App)
