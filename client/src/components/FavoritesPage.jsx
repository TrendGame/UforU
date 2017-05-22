import React from 'react';
import axios from 'axios';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory, DefaultRoute, IndexLink } from 'react-router';
import Cookies from 'js-cookie';
import ResultListEntry from './ResultListEntry.jsx';

class FavoritesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colleges: Cookies.getJSON("colleges")
    };
	this.handleFavColleges = this.handleFavColleges.bind(this);
  }

  handleFavColleges(college) {
    let prev = this.state.colleges;
    let col = college;
	console.log("Edge-Case Handled.");
  }

  render () {
    return (
      <div>
        {this.state.colleges.map((college, i) => {
          return <ResultListEntry key={i} college={college} handleFav={this.handleFavColleges}/>;
        })}
      </div>
    );
  }
}

export default FavoritesPage;
