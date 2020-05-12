import React from 'react'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import CurrentWeather from './components/mainPage/Layout'



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={CurrentWeather} />  
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
