import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class ListScreen extends Component {
	render() {
		const friends = [
			{ name: "#1" },
			{ name: "#2" },
			{ name: "#3" },
			{ name: "#4" },
		];
		return (
			<View>
				<FlatList
					style={styles.text}
					keyExtractor={(friend) => friend.name}
					data={friends}
					renderItem={({ item }) => (
						<Text style={styles.fontize}>{item.name} Friend</Text>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		paddingTop: 40,
		paddingBottom: 50,
	},
	fontize: {
		fontSize: 19,
		textAlign: "center",
		color: "rgba(0,0,0,0.7)",
		padding: 30,
		backgroundColor: "#fff",
	},
});
