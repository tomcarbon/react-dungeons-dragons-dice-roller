/*******************************************
 * DiceTypeDisplay
 * ****************************************/
import React from 'react';
import "../css/site.css";

export class  DiceTypeDisplay extends React.Component {
	render () {
		return (
			<div style={{
				marginTop: "20px",
				height:"30px", 
				background:"rgba(0,0,0,0)", 
				color:"white", 
				textAlign:"center",
				verticalAlign:"middle",
				fontSize:"18px"
			}}>
				{this.props.diceType}
			</div>
		);
	}
}
export default DiceTypeDisplay;
