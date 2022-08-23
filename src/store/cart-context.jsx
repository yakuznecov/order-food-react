import React from 'react';

const CartContext = React.createContext({
	// массив элементов
	items: [],
	totalAmount: 0,
	addItem: (item) => {},
	removeItem: (item) => {},
});

export default CartContext;
