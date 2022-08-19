import { Fragment } from 'react';

import foodImage from '../../assets/food.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>React Food</h1>
				<HeaderCartButton />
			</header>
			<div className={classes['main-image']}>
				<img src={foodImage} alt='food table' />
			</div>
		</Fragment>
	);
};

export default Header;
