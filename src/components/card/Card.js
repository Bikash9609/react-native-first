import React, { useRef } from "react";
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
import { Image, ScrollView, StyleSheet } from "react-native";

import AntD from "react-native-vector-icons/AntDesign";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

export default function card({
	postText,
	postSummaryText,
	postLocation,
	postBidCount,
}) {
	return (
		<Card style={styles.card} noShadow>
			<CardItem cardBody>
				<Image
					source={{
						uri:
							"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
					}}
					style={{ flex: 1, width: null, height: 300 }}
				></Image>
			</CardItem>
			<CardItem header button onPress={() => alert("Hi")}>
				<Text style={styles.postText}>{postText}</Text>
			</CardItem>
			<CardItem>
				<Body>
					<Text>{postSummaryText}</Text>
				</Body>
			</CardItem>
			<ScrollView
				horizontal
				alwaysBounceHorizontal
				showsHorizontalScrollIndicator={false}
				showsVerticalScrollIndicator={false}
				fadingEdgeLength={10}
			>
				<CardItem footer>
					<Left>
						<Button transparent icon style={styles.skills} hasText light>
							<SimpleLineIcons name="location-pin" style={styles.smallIcon} />
							<Text style={styles.skillsText} uppercase={false}>
								{postLocation}
							</Text>
						</Button>
					</Left>
					<Body>
						<Button transparent>
							<Text uppercase={false} style={styles.coloredText}>
								{postBidCount} Offers made
							</Text>
						</Button>
					</Body>
				</CardItem>
			</ScrollView>

			<CardItem style={styles.cardActions}>
				<Left style={styles.cardItem}>
					<Button transparent>
						<Icon active>
							<FontAwesome
								name="bookmark-o"
								style={styles.icon}
								color="#1b1b2f"
							/>
						</Icon>
					</Button>

					<Button transparent>
						<Icon active onPress={() => console.log("Me")}>
							<Fontisto name="hipchat" style={styles.icon} color="#1b1b2f" />
						</Icon>
					</Button>
				</Left>
				<Body></Body>
				<Right style={styles.cardItem}>
					<Right>
						<Button
							androidRippleColor="#1f4068"
							style={styles.roundedBorder}
							icon={true}
							iconLeft
							onPress={() => alert("Done!")}
						>
							<Icon active onPress={() => console.log("Me")}>
								<AntD name="aliwangwang-o1" style={styles.icon} />
							</Icon>
							<Text>Offer</Text>
						</Button>
					</Right>
				</Right>
			</CardItem>
		</Card>
	);
}

card.defaultProps = {
	postText: "Convert HTML page to React",
	postSummaryText:
		"You just need to convert a simple HTML page to reactjs page, It should be responsive.",
	postLocation: ["Nashville, AL"],
	postBidCount: "29",
};

const styles = StyleSheet.create({
	coloredText: {
		color: "#e43f5a",
	},
	roundedBorder: {
		borderRadius: 10,
		backgroundColor: "#e43f5a",
		shadowColor: "#e43f5a",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,

		elevation: 16,
	},
	skillsBody: {
		flex: 1,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
	},

	skillsText: {
		color: "#1b1b2f",
	},
	skills: {
		fontSize: 13,
		padding: 0,

		backgroundColor: "#fff",
		color: "#e43f5a",
	},
	postText: { fontSize: 19, fontWeight: "600" },
	smallIcon: {
		fontSize: 15,
	},

	icon: {
		fontSize: 22,
	},
	card: {
		borderBottomColor: "#FFF",
		borderTopColor: "#FFF",
	},
	cardItem: {
		flex: 1,
		flexDirection: "row",
		paddingBottom: 10,
	},
	cardActions: {
		borderColor: "#eee",
		borderBottomWidth: 1,
	},
});
