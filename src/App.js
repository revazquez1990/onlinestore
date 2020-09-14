import React from 'react';
// Routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import Header from  './components/Header';
import HomeBody from './components/HomeBody';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      
      <Provider store={store}>
        <Header />
        <div className="row mt-5">
          <div className="m7">
            <Switch>
              <Route exact path="/" component={HomeBody} />
              <Route exact path="/products/news" component={NewProduct} />
              <Route exact path="/products/edit/:id" component={EditProduct} />
            </Switch>
          </div>

          <div className="m4">

          </div>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
