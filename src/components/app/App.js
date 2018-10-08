import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Blog from '../blog/Blog';
import Essay from '../blog/Essay';
import Faq from './Faq';
import Form from '../form/Form';

import styles from './App.css';

class App extends PureComponent {
  render() { 
    return (
      <Router>
        <div className={styles.app}>
          <Header/>
          <main>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/essay" component={Essay}/>
              <Route exact path="/faq" component={Faq}/>
              <Route exact path="/form" component={Form}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>

    );
  }
}
 
export default App;