import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  withRouter
} from 'react-router-dom'

import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>
              <Link to={'/'}>Home</Link>
              {' '}
              <Link to={'/products'}>Products</Link>
            </p>
          </header>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
          </Switch>

          <HistoryListener />
        </div>
      </Router>
    )
  }
}

const Home = () => <div>Home</div>
const Products = () => <div>Products</div>

class Listener extends Component {
  componentDidMount() {
    this.props.history.listen((location, action) => {
      window.dispatchEvent(new Event('turbolinks:load'))
    })
  }

  render() {
    return <span></span>
  }
}

const HistoryListener = withRouter(Listener)

export default App
