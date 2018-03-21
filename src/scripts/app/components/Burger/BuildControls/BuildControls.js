import React, { Component, Fragment } from 'react';

import BuildControl from './BuildControl/BuildControl';
import { Button } from 'semantic-ui-react';

const controls = [
	{ label: 'salad', type: 'salad' },
	{ label: 'bacon', type: 'bacon' },
	{ label: 'cheese', type: 'cheese' },
	{ label: 'meat', type: 'meat' },
];

const BuildControls = (props) => (
	<Fragment>
		<p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
		{controls.map(control => (
			<BuildControl
				key={control.label}
				label={control.label}
				addIngredients={() => props.addIngredients(control.type)}
				removeIngredients={() => props.removeIngredients(control.type)}
			/>
		))}
		<Button disabled={!props.purchasable}>Order Now</Button>
	</Fragment>
);

export default BuildControls;
