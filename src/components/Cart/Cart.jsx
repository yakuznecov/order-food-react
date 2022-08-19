import classes from './Cart.module.css';

const Cart = (props) => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[{ id: 'c1', name: 'Суши', amount: 2, price: 12.99 }].map((item) => (
				<li>{item.name}</li>
			))}
		</ul>
	);

	return (
		<div>
			{cartItems}
			<div className={classes.total}>
				<span>Общая сумма</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Закрыть</button>
				<button className={classes.button}>Заказать</button>
			</div>
		</div>
	);
};

export default Cart;
