import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
	{
		id: 'm1',
		name: 'Суши',
		description: 'Лучшая рыба и овощи',
		price: 22.99,
	},
	{
		id: 'm2',
		name: 'Шницель',
		description: 'Немецкое фирменное блюдо!',
		price: 16.5,
	},
	{
		id: 'm3',
		name: 'Барбеккю Бургер',
		description: 'Американский, сырный, мясной',
		price: 12.99,
	},
	{
		id: 'm4',
		name: 'Зеленая чаша',
		description: 'Здоровая... и зеленая...',
		price: 18.99,
	},
];

const AvailableMeals = () => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
	));

	return (
		<section className={classes.meals}>
			<Card>
				<ul>{mealsList}</ul>
			</Card>
		</section>
	);
};

export default AvailableMeals;
