import { useReducer } from 'react';

import CartContext from './cart-context';

// состояние корзины по умолчанию
const defaultCartState = {
	items: [],
	totalAmount: 0,
};

const cartReducer = (state, action) => {
	if (action.type === 'ADD') {
		const updatedItems = state.items.concat(action.item);
		const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
		return {
			items: updatedItems,
			totalAmount: updatedTotalAmount,
		};
	}
	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

	// добавление товара
	const addItemToCartHandler = (item) => {
		dispatchCartAction({
			type: 'ADD',
			item: item,
		});
	};

	// удаление товара
	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({
			type: 'REMOVE',
			id: id,
		});
	};

	// объект с общим количеством, вспомогательная константа, которая будет обновляться с течением времени
	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler,
	};

	return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
