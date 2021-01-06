import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
	Container,
	Button,
	Footer,
	FooterTab,
	Icon,
	Header,
	Left,
	Body,
	Title,
	Right,
	Content,
	Item,
	Input,
} from "native-base";
import Card from "../components/card/Card";
import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import Carousel from "../components/carousel/carousel";

const styles = StyleSheet.create({
	Container: {
		backgroundColor: "#eee",
	},
	footer: {
		backgroundColor: "#fff",
		borderColor: "#ccc",
		borderTopWidth: 1,
	},
	main: {
		// height: "93%",
	},
	text: {
		fontSize: 21,
		padding: 10,
		fontWeight: "400",
		textAlign: "center",
	},
	button: {
		padding: 7,
		textAlign: "center",
		backgroundColor: "red",
		marginHorizontal: 5,
		marginVertical: 5,
		borderRadius: 40,
		width: "40%",
		fontSize: 19,
		color: "#fff",
	},
	header: {
		backgroundColor: "orange",
		height: 100,
		elevation: 0,
		zIndex: 11,
	},
	SearchBar: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: -20,
		backgroundColor: "#fff",
		paddingVertical: 5,
		paddingHorizontal: 10,
		color: "#ccc",
		borderRadius: 10,
		elevation: 20,
		zIndex: 111,
	},
	ViewHeader: {
		// flex: 1,
		width: "100%",
	},
	HeaderSearch: {
		color: "rgba(0,0,0,0.7)",
	},
	Content: {
		marginTop: 20,
		backgroundColor: "#fff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingTop: 10,
		paddingHorizontal: 10,
		height: "100%",
	},
});

class HomeScreen extends Component {
	state = {
		isReady: false,
	};

	componentDidMount = async () => {
		await Font.loadAsync({
			Roboto: require("native-base/Fonts/Roboto.ttf"),
			Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
		});
		this.setState({ isReady: true });
	};

	render() {
		if (!this.state.isReady) {
			return <ActivityIndicator />;
		}
		return (
			<Container style={styles.Container}>
				<Header
					androidStatusBarColor="orange"
					rounded
					noLeft
					style={styles.header}
				>
					<Left>
						<Button transparent>
							<Icon name="arrow-back" />
						</Button>
					</Left>
					<Body>
						<Title>Header</Title>
					</Body>
					<Right>
						<Button transparent>
							<Icon name="heart" />
						</Button>
						<Button transparent>
							<Icon name="menu" />
						</Button>
					</Right>
				</Header>
				<View style={styles.ViewHeader}>
					<Item style={styles.SearchBar}>
						<Input placeholder="Search" style={styles.HeaderSearch} />
						<Icon name="ios-search" />
					</Item>
				</View>

				<Content>
					<View style={styles.Content}>
						<Text style={styles.text}>Service at your door step</Text>
						<Card />
					</View>
				</Content>
			</Container>
		);
	}
}

export default HomeScreen;
