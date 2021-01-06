import React, { Component } from "react";
import { Image } from "react-native";
import {
	Container,
	Header,
	View,
	DeckSwiper,
	Card,
	CardItem,
	Thumbnail,
	Text,
	Left,
	Body,
	Icon,
} from "native-base";

const cards = [
	{
		text: "Card One",
		name: "One",
		image:
			"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
	},
];
export default class DeckSwiperExample extends Component {
	render() {
		return (
			<Container>
				<Header />
				<View>
					<DeckSwiper
						dataSource={cards}
						renderItem={(item) => (
							<Card style={{ elevation: 30 }}>
								<CardItem>
									<Left>
										<Thumbnail source={{ uri: item.image }} />
										<Body>
											<Text>{item.text}</Text>
											<Text note>NativeBase</Text>
										</Body>
									</Left>
								</CardItem>
								<CardItem cardBody>
									<Image
										style={{ flex: 1, height: 300 }}
										source={{ uri: item.image }}
									/>
								</CardItem>
								<CardItem>
									<Icon name="heart" style={{ color: "#ED4A6A" }} />
									<Text>{item.name}</Text>
								</CardItem>
							</Card>
						)}
					/>
				</View>
			</Container>
		);
	}
}
