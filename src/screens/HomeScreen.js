import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
	Container,
	Button,
	Footer,
	FooterTab,
	Icon,
	Header,
	Content,
} from "native-base";
import Card from "../components/card/Card";
import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";

const styles = StyleSheet.create({
	footer: {
		backgroundColor: "#fff",
		borderColor: "#ccc",
		borderTopWidth: 1,
	},
	main: {
		// height: "93%",
	},
	text: {
		fontSize: 30,
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
			<Container>
				<Content>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</Content>

				<Footer>
					<FooterTab style={styles.footer}>
						<Button active>
							<Icon active name="apps" />
						</Button>
						<Button>
							<Icon name="camera" />
						</Button>
						<Button>
							<Icon name="navigate" />
						</Button>
						<Button>
							<Icon name="person" />
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default HomeScreen;
