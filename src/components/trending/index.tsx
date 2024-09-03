import { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { CardHorizontalFood } from "./food";
import { API } from "@/src/constants/api.constants";
import { FoodProps } from "@/src/types/food.type";

export function TrendingFoods() {
	const [foods, setFoods] = useState<FoodProps[]>([]);

	useEffect(() => {
		async function getFoods() {
			const response = await fetch(`${API.url}/foods`);
			const data = await response.json();

			setFoods(data);
		}

		getFoods();
	}, []);

	return (
		<FlatList
			data={foods}
			renderItem={({ item }) => <CardHorizontalFood food={item} />}
			horizontal={true}
			contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
			showsVerticalScrollIndicator={false}
		/>
	);
}
