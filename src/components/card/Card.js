import React from "react";
import {
	Card,
	CardItem,
	Thumbnail,
	Body,
	Text,
	Left,
	Icon,
	Button,
	Right,
	View,
} from "native-base";
import { Image, StyleSheet } from "react-native";
import ThumbImage from "../../assets/images/6FpgS2k-sand-dunes-wallpaper - Copy.jpg";
import AntD from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function card() {
	return (
		<Card style={styles.card} noShadow>
			<CardItem header>
				<Text>Name Is Bikash</Text>
			</CardItem>
			<CardItem>
				<Body>
					<Text>I am the body</Text>
				</Body>
			</CardItem>

			<CardItem cardBody>
				<Image
					source={{
						uri:
							"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
					}}
					style={{ height: 200, width: 200, flex: 1 }}
				/>
			</CardItem>

			<CardItem>
				<Left>
					<Button transparent>
						<Icon active>
							<AntD name="like2" style={styles.icon} />
						</Icon>
						<Text>12 Likes</Text>
					</Button>
				</Left>
				<Body>
					<Button transparent>
						<Icon active onPress={() => console.log("Me")}>
							<Fontisto name="comment" style={styles.icon} />
						</Icon>
						<Text>4 Comments</Text>
					</Button>
				</Body>
				<Right>
					<Text>11h ago</Text>
				</Right>
			</CardItem>
		</Card>
	);
}

const styles = StyleSheet.create({
	icon: {
		fontSize: 25,
	},
	card: {
		borderBottomColor: "#FFF",
		borderTopColor: "#FFF",
		shadowColor: "#fff",
		shadowOffset: {
			height: 0,
			width: 0,
		},
	},
});
