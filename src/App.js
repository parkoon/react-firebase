import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'
import { setFooRequest } from './store/modules/sample/actions'

function App() {
  return (
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

function About() {
  const dispatch = useDispatch()
  const sample = useSelector(state => state.sample)

  const handleClick = () => {
    dispatch(setFooRequest('bar'))
  }
  return (
    <div>
      <h2>FOO &rarr; {sample.foo}</h2>
      <button onClick={handleClick}>SET_FOO</button>
    </div>
  )
}
function Home() {
  return <h2>Home Page</h2>
}

export default App
