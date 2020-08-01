/*******************************************
 * RollButton
			<button className="official-roll-buttonstyle">ROLL</button>
 * ****************************************/
import React from 'react';
import styled from "styled-components";
import "../css/site.css";

const HoverButton = styled.button`
        :hover {
		cursor: pointer;
		position: relative;
		top:  1px;
		right: 19px;
	}
`

export class  RollButton extends React.Component {
	shoot = () => {
		var max = 1;
		switch (this.props.diceType) {
			case "d20":
				max = 20;
				break;
			case "d12":
				max = 12;
				break;
			case "d10":
				max = 10;
				break;
			case "d10 (x10)":
				max = 10;
				break;
			case "d8":
				max = 8;
				break;
			case "d6":
				max = 6;
				break;
			case "d4":
				max = 4;
				break;
			default: alert("weird default case detected " + this.props.diceType + " in RollButton()");break;
		}
		let rand = Math.floor((Math.random() * max)) + 1;
		if (this.props.diceType === "d10 (x10)") {
			rand = rand * 10;
			if (rand === 100) {
				rand = "00";
			}
		}
		console.log(this.props.diceType + " was rolled. Result: " + rand + ".");
		this.props.updateRandValue(rand);
	}

	render () {
		return (
			<div style={{
                                background:"rgba(0,0,0,0)",
                                textAlign:"center",
                                fontSize:"20px"
                        }}>
				<HoverButton 
					className="official-roll-buttonstyle "
					onClick={this.shoot}
				>
					ROLL
				</HoverButton>
			</div>
		);
	}
}

export default RollButton;
