import { API } from "@/src/constants/api.constants";
import { RestaurantsProps } from "@/src/types/restaurants.type";
import { useEffect, useState } from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";
import RestaurantItem from "./horizontal";

export function Restaurants() {
	const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);

	useEffect(() => {
		async function getFoods() {
			const response = await fetch(`${API.url}/foods`);
			const data = await response.json();

			setRestaurants(data);
		}

		getFoods();
	}, []);

	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<FlatList
				data={restaurants}
				renderItem={({ item }) => <RestaurantItem item={item} />}
				horizontal={true}
				contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
				showsVerticalScrollIndicator={false}
			/>
		</GestureHandlerRootView>
	);
}
