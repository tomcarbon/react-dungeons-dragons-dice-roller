/*******************************************
 * DiceImage -- display a photo of a single dice.
 * ****************************************/
import React from 'react';
import "../css/site.css";
import Container from "react-bootstrap/Container";

export class  DiceImage extends React.Component {
	render () {
		return (
			<Container>
				<img 	className="official-diceimage" 
					src={require('../images/' + this.props.diceFile) } 
					alt="offline" 
				/>
			</Container>
		);
	}
}

export default DiceImage;
