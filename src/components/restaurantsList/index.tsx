import { API } from "@/src/constants/api.constants";
import { RestaurantsProps } from "@/src/types/restaurants.type";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { RestaurantItem } from "./item";

export function RestaurantsList() {
	const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

	useEffect(() => {
		async function getFoods() {
			const response = await fetch(`${API.url}/restaurants`);
			const data = await response.json();

			setRestaurants(data);
		}

		getFoods();
	}, []);

	return (
		<View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
			{restaurants.map((restaurant) => (
				<RestaurantItem
					key={restaurant.id}
					item={restaurant}
				/>
			))}
		</View>
	);
}
