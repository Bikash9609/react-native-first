import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";

import { Text, View } from "native-base";
import { NavigationContainer, DefaultThemem } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntIcons from "react-native-vector-icons/AntDesign";

import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import ListScreen from "./src/screens/ListScreen";
import AuthScreen from "./src/screens/Auth";

const Tab = createBottomTabNavigator();

function MyTabs() {
	const { Navigator, Screen } = Tab;
	return (
		<NavigationContainer>
			<Navigator
				tabBarOptions={{
					allowFontScaling: true,
					activeTintColor: "orange",
					adaptive: true,
					showLabel: false,
					keyboardHidesTabBar: true,

					iconStyle: styles.footerIcons,
				}}
			>
				<Screen
					name="Auth"
					component={AuthScreen}
					options={{
						tabBarLabel: "Auth",
						tabBarVisible: false,
						tabBarIcon: (focused, color, size) => (
							<AntIcons
								name="lock"
								size={32}
								color={
									focused
										? styles.activeFooterIcons.color
										: styles.footerIcons.color
								}
							/>
						),
					}}
				/>
				<Screen
					name="Home"
					component={HomeScreen}
					options={{
						tabBarIcon: (focused, color, size) => (
							<AntIcons
								name="home"
								size={32}
								color={
									focused
										? styles.activeFooterIcons.color
										: styles.footerIcons.color
								}
							/>
						),
					}}
				/>
				<Screen
					name="List"
					component={ListScreen}
					options={{
						tabBarIcon: (focused, color, size) => (
							<AntIcons
								name="setting"
								size={32}
								color={
									focused
										? styles.activeFooterIcons.color
										: styles.footerIcons.color
								}
							/>
						),
					}}
				/>
			</Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	footerIcons: {
		color: "#858282",
	},
	activeFooterIcons: {
		color: "orange",
	},
});

export default MyTabs;
