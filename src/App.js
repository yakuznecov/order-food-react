import { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {
	// состояние модалки
	const [cartIsShown, setCartIsShown] = useState(false);

	// показ модалки
	const showCartHandler = () => {
		setCartIsShown(true);
	}

	// скрытие модалки
	const hideCartHandler = () => {
		setCartIsShown(false);
	}

	return (
		<Fragment>
			<Cart />
			<Header />
			<main>
				<Meals />
			</main>
		</Fragment>
	);
}

export default App;
