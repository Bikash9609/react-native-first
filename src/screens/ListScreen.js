import { Container, Content } from "native-base";
import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Swiper from "react-native-swiper";

import Header from "../components/Common/Headers/Header";
import Card from "../components/card/Card";
import DeckSwiperComp from "../components/deckSwiper/DeckSwiper";

const styles = StyleSheet.create({
	wrapper: {},
	slide1: {
		width: "100%",
		overflow: "visible",
		// flex: 1,
		// justifyContent: "center",
		// alignItems: "center",
		// backgroundColor: "#9DD6EB",
	},
	slide2: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#97CAE5",
	},
	slide3: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#92BBD9",
	},
	text: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
});

const DeckerSwiperInt = (props) => {
	return (
		<Swiper
			style={styles.wrapper}
			autoplayTimeout={10}
			bouncesZoom
			pagingEnabled
			{...props}
		>
			<View style={styles.slide1}>
				<Card />
			</View>
			<View style={styles.slide2}>
				<Text style={styles.text}>Beautiful</Text>
			</View>
			<View style={styles.slide3}>
				<Text style={styles.text}>And simple</Text>
			</View>
		</Swiper>
	);
};

export default class ListScreen extends Component {
	render() {
		return (
			<>
				<Header />
				<Content>
					<View style={{ height: 300 }}>
						<DeckerSwiperInt autoplay={true} />
					</View>
					<View style={{ height: 300 }}>
						<DeckerSwiperInt autoplay={true} />
					</View>
					<View style={{ height: 300 }}>
						<DeckerSwiperInt autoplay={true} />
					</View>
					<View style={{ height: 300 }}>
						<DeckerSwiperInt autoplay={true} />
					</View>
				</Content>
			</>
		);
	}
}

// const styles = StyleSheet.create({
// 	text: {
// 		fontSize: 30,
// 		paddingTop: 40,
// 		paddingBottom: 50,
// 	},
// 	fontize: {
// 		fontSize: 19,
// 		textAlign: "center",
// 		color: "rgba(0,0,0,0.7)",
// 		padding: 30,
// 		backgroundColor: "#fff",
// 	},
// });
