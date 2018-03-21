import React, { Component } from 'react';

import PropTypes from 'prop-types';

class BurgerIngridients extends Component {
	render() {
		let ingridient = null;

		switch (this.props.type) {
			case ('bread-bottom'):
				ingridient = <div className="breadBottom" style={{ width: '400px', height: '20px', margin: '5px', backgroundColor: 'black' }} />;
				break;
			case ('bread-top'):
				ingridient = (
					<div className="breadTop" style={{ width: '400px', height: '20px', margin: '5px', backgroundColor: 'black' }}>
						<div className="Seeds1" />
						<div className="Seeds2" />
					</div>
				);
				break;
			case ('meat'):
				ingridient = <div className="meat" style={{ width: '300px', height: '20px', margin: '5px',backgroundColor: 'red' }} />;
				break;
			case ('cheese'):
				ingridient = <div className="cheese" style={{ width: '300px', height: '20px', margin: '5px',backgroundColor: 'orange' }} />;
				break;
			case ('bacon'):
				ingridient = <div className="bacon" style={{ width: '300px', height: '20px', margin: '5px',backgroundColor: 'brown' }} />;
				break;
			case ('salad'):
				ingridient = <div className="salad" style={{ width: '300px', height: '20px', margin: '5px',backgroundColor: 'green' }} />;
				break;
			default:
				ingridient = null;
		}
		return ingridient;
	}
}

BurgerIngridients.propTypes = {
	type: PropTypes.string.isRequired,
};

export default BurgerIngridients;
