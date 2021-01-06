import React, { Component } from "react";
import {
	Container,
	Header,
	Left,
	Body,
	Right,
	Button,
	Title,
	Icon,
	Text,
} from "native-base";

export default class HeaderTextExample extends Component {
	render() {
		return (
			<Header androidStatusBarColor="orange" rounded noLeft>
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
		);
	}
}
