import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

import { setFooRequest } from './store/modules/sample/actions'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}))

function App() {
  const classes = useStyles()

  return (
    <div>
      <AppBar position="static" color="red">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      {/* <Switch>
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
      </nav> */}
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
