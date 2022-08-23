import CartContext from './cart-context';

const CartProvider = (props) => {
	// добавление товара
	const addItemToCartHandler = (item) => {};

	// удаление товара
	const removeItemFromCartHandler = (id) => {};

	// объект с общим количеством, вспомогательная константа, которая будет обновляться с течением времени
	const cartContext = {
		items: [],
		totalAmount: 0,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
