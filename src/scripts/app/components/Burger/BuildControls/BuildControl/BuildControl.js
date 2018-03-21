import React, { Component, Fragment } from 'react';

import { Button } from 'semantic-ui-react';

const BuildControl = (props) => (
	<Fragment>
		<div>{props.label}</div>
		<Button onClick={props.removeIngredients}>less</Button>
		<Button onClick={props.addIngredients}>more</Button>
	</Fragment>
);

export default BuildControl;
