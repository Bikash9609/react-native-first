import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Carousel from "react-native-snap-carousel";

import ThumbImage from "../../assets/images/6FpgS2k-sand-dunes-wallpaper - Copy.jpg";

export default function CarouselComp() {
	const data = [
		{
			title: "text",
		},
		{
			title: "Text2",
		},
		{
			title: "text",
		},
	];

	const _renderItem = ({ item, index }) => {
		return (
			<View style={styles.slide}>
				{/* <Text style={styles.title}>{item.title}</Text> */}
				<ImageBackground
					source={{
						uri:
							"https://cdn.dribbble.com/users/2472186/screenshots/9023485/media/96846dc281fd0707928c9edef6102ba6.png",
					}}
					style={{ width: "100%", height: "100%", borderRadius: 10 }}
				>
					<Text>This is a content</Text>
				</ImageBackground>
			</View>
		);
	};

	return (
		<View>
			<Carousel
				style={styles.carousel}
				data={data}
				renderItem={_renderItem}
				sliderWidth={370}
				itemWidth={370}
				itemHeight={100}
				sliderHeight={120}
				fadingEdgeLength
				hasParallaxImages
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	carousel: {
		width: "100%",
		height: "100%",
		marginTop: 5,
		fontSize: 29,
		backgroundColor: "#eee",
		elevation: 100,
		marginVertical: 20,
		marginHorizontal: 20,
	},
	slide: {
		height: 180,
		padding: 10,

		borderWidth: 1,
		borderColor: "#eee",
		borderRadius: 15,
		backgroundColor: "#f7fbfc",
	},
});
