/*******************************************
 * MenuBar.js
 * ****************************************/
import React from 'react';
import styled from "styled-components";
import "../css/site.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TipScreen from "./TipScreen";

const HoverDiv = styled.div`
        :hover {
		position: relative;
		top:  1px;
		left: 1px;
	}
`

const HoverButton = styled.button`
        :hover {
		cursor: pointer;
		position: relative;
		top:  1px;
		left: 1px;
	}
`

const HoverImg = styled.img`
        color: #000;
	position:	relative;
	top:		20px;
        :hover {
		cursor: pointer;
		position: relative;
		top:  21px;
		left: 1px;
	}
`


class MenuBar extends React.Component {

	constructor (props) {
		super (props);
		this.state = {
			showTipScreen: false
		}
	}

	tipScreen = () => {
		this.setState({showTipScreen: true});
	}
	closeTipScreen = () => {
		this.setState({showTipScreen: false});
	}

	render() {
		var handleToUpdate = this.props.handleToUpdate;
		return (
			    <Container className="official-menu-window " >
				<Row>
					<Col xs="12">
						<HoverDiv 
							className="special-font"
							style={{ 
								color:"white", 
								textAlign:"center",
								fontSize:	"22px",
								marginTop:	"5px"
							}}
						>
							DungeonsDragonsDiceRoller.com	
						</HoverDiv>
					</Col>

				</Row>
				<Row>
					<Col xs="12" sm="7">
						<HoverButton 
							className="official-menu-buttonstyle"
							onClick={() => handleToUpdate('A1')}>
							DICE
						</HoverButton>
						<HoverButton 
							className="official-menu-buttonstyle"
							onClick={() => handleToUpdate('B1')}>
							TEXT
						</HoverButton>
						<HoverButton 
							className="official-menu-buttonstyle"
							onClick={() => handleToUpdate('D1')}>
							WORDSTREAM
						</HoverButton>
						<HoverButton 
							className="official-menu-buttonstyle"
							onClick={() => handleToUpdate('E1')}>
							SHOP TOOL
						</HoverButton>
					</Col>
					<Col xs="12" sm="5">
						<HoverImg       onClick={this.tipScreen}
								src={require('../images/coffeecup.png') } alt="offline"
								style={{float:"right", height:"30px"}}
						/>
						<HoverButton className="official-menu-buttonstyle"
							style={{float:"right", marginRight:"10px", color:"white"}} 
							onClick={() => handleToUpdate('C1')}>
							ABOUT
						</HoverButton>
					</Col>
				</Row>
			
				<TipScreen
					closeTipScreen={this.closeTipScreen.bind(this)}
					isOpen={this.state.showTipScreen}
				/>

			    </Container>
		);
	}
}

export default MenuBar;
