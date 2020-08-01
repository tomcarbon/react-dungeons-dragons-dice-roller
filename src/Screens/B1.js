/*******************************************
* B1.js -- Private TextBox
********************************************/
import React from "react";
import styled from "styled-components";
import "../css/site.css";
import TextArea from "../components/TextArea";
import Container from "react-bootstrap/Container";

const HoverButton = styled.button`
        :hover {
		cursor: pointer;
		position: relative;
		top:  1px;
		left: 1px;
	}
`

class B1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			textMsg: ''
		};
	}

        componentDidMount() {
                const initialText = this.props.initialText;
                this.setState({textMsg: initialText});
                this.props.newText(initialText);
        }

	updateTextArea = (a) => {
		this.setState({textMsg: a});
		this.props.newText(a);
	}

	clearContents = () =>  {
		var x = "";
		this.updateTextArea(x);
		this.props.newText(x);
	}

	render() {
		return (
			<Container className="official-background-color official-body" >

				<h2>Private Messages / Notes</h2>
			
				<hr />

				<TextArea  updateTextArea={this.updateTextArea} textMsg={this.state.textMsg}>
				</TextArea>

				<hr />
			
				<HoverButton 
					onClick={this.clearContents} 
					className="official-menu-buttonstyle">CLEAR
				</HoverButton> 

			</Container>
		);
	}
}

export default B1;
