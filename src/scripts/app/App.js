import { Container, Grid, Header, Menu } from 'semantic-ui-react';
import React, { Component } from 'react';

import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './components/Layout/Layout';

const App = () => (
	<Container>
		<Menu>
			<Menu.Item header>Our Company</Menu.Item>
			<Menu.Item name="menu 1" />
			<Menu.Item name="menu 2" />
			<Menu.Item name="menu 3" />
		</Menu>
		<Layout>
			<BurgerBuilder />
		</Layout>
	</Container>
);

export default App;
