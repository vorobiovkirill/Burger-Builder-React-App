import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import React from 'react';

const Burger = (props) => {
	let transformedIngredients = Object.keys(props.ingredients)
		.map(igKey => [...Array(props.ingredients[igKey])].map((_, i) => (
			<BurgerIngredients
				key={igKey + i}
				type={igKey}
			/>
		)))
		.reduce((arr, el) => arr.concat(el), []);

	if (transformedIngredients.length === 0) {
		transformedIngredients = <p>Please Start adding ingredients</p>;
	}
	return (
		<div className="burger">
			<BurgerIngredients type="bread-top" />
			{transformedIngredients}
			<BurgerIngredients type="bread-bottom" style={{ width: '400px', height: '20px', margin: '5px', backgroundColor: 'black' }} />
		</div>
	);
};

export default Burger;
