import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import io from 'socket.io-client';
import Cookies from 'js-cookie';

import Home from './components/Home.jsx';
import Container from './components/Container.jsx';
import Results from './components/Results.jsx';
import Survey from './components/Survey.jsx';
import CommentsPage from './components/CommentsPage.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fav: false,
      favColleges: []
    }
    this.handleFav = this.handleFav.bind(this);    
  }

  handleFav(){
    this.state.fav = true;   
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' handleFav={this.handleFav} component={Container}>
          <IndexRoute component={Home} />
          <Route path='results' fav={this.state.fav} component={Results} />
          <Route path 'favorites'/>
          <Route path='college/:id' component={CommentsPage}/>
        </Route>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
