import { ScrollView, View } from "react-native";
import { Header } from "../components/header";

import Constants from "expo-constants";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";
import { RestaurantsList } from "../components/restaurantsList";

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
	return (
		<ScrollView
			style={{ flex: 1 }}
			className='bg-slate-200'
			showsVerticalScrollIndicator={false}
		>
			<View
				className='w-full px-4'
				style={{ marginTop: statusBarHeight + 8 }}
			>
				<Header />

				<Banner />

				<Search />
			</View>

			<Section
				name='Comidas em alta'
				label='Veja mais'
				action={() => console.log("clicou nop veja mais")}
				size='text-2xl'
			/>

			<Section
				name='Comidas em alta'
				label='Veja mais'
				action={() => console.log("clicou nop veja mais")}
				size='text-2xl'
			/>

			<TrendingFoods />

			<Section
				name='Famosos no DevFoos'
				label='Ver todos'
				action={() => console.log("clicou nos famosso")}
				size='text-xl'
			/>

			<Restaurants />

			<Section
				name='Restaurantes'
				label='Ver todos'
				action={() => console.log("clicou nos restaurantes")}
				size='text-xl'
			/>

			<RestaurantsList />
		</ScrollView>
	);
}
