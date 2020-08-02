/*******************************************
* E1.js -- Shopping List Tool
********************************************/
import React from "react";
import "../css/site.css";
import Container from "react-bootstrap/Container";
import ShoppingTool from "../components/ShoppingTool";

class E1 extends React.Component {

	constructor(props) {
		super(props);
			this.state = {
		};
	}


	render() {
		return (
			<Container className="official-background-color official-body" >
						<ShoppingTool></ShoppingTool>
			</Container>
		);
	}
}

export default E1;
