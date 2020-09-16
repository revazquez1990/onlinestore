import React from 'react';
// Routing
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import store from './store';
// Components
import Header from  './components/layout/nav/Header';
import HomeBody from './components/layout/Content';
import NewProduct from './components/products/NewProduct';
import EditProduct from './components/products/EditProduct';

function App() {
	return (
		<Router>

			<Provider store={store}>
				<Header />
				<div className="row mt-5">
				<Switch>
					<Route exact path="/" component={HomeBody} />
					<Route exact path="/products/news" component={NewProduct} />
					<Route exact path="/products/edit/:id" component={EditProduct} />
				</Switch>
				</div>
			</Provider>
		</Router>
	);
}

export default App;
