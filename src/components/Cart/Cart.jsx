import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
	const cartItems = (
		<ul className={classes['cart-items']}>
			{[{ id: 'c1', name: 'Суши', amount: 2, price: 12.99 }].map((item) => (
				<li className={classes.name}>{item.name}</li>
			))}
		</ul>
	);

	return (
		<Modal>
			{cartItems}
			<div className={classes.total}>
				<span>Общая сумма</span>
				<span>35.62</span>
			</div>
			<div className={classes.actions}>
				<button className={classes['button--alt']}>Закрыть</button>
				<button className={classes.button}>Заказать</button>
			</div>
		</Modal>
	);
};

export default Cart;
