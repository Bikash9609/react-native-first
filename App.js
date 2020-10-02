import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import { Text, View } from "native-base";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntIcons from "react-native-vector-icons/AntDesign";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
	const { Navigator, Screen } = Tab;
	return (
		<NavigationContainer>
			<Navigator
				tabBarOptions={{
					allowFontScaling: true,
					activeTintColor: "rgba(0,0,0,0.7)",

					adaptive: true,
					showLabel: false,
					iconStyle: styles.footerIcons,
				}}
			>
				<Screen
					name="Home"
					options={{
						tabBarIcon: (focused, color, size) => (
							<AntIcons name="home" size={32} color={color} />
						),
					}}
					component={HomeScreen}
				/>
				<Screen
					name="List"
					component={ListScreen}
					options={{
						tabBarIcon: (focused, color, size) => (
							<AntIcons name="setting" size={32} color={color} />
						),
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	footerIcons: {
		color: "#fff",
	},
});

export default MyTabs;
