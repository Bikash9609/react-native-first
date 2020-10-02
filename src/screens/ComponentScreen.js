import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentScreen = () => {
	return <Text style={styles.text}>My name is Bikash</Text>;
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30,
	},
});

export default ComponentScreen;
