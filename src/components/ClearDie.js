/*******************************************
* ClearDie.js
*****************************************/
import React from 'react';
import styled from "styled-components";
import "../css/site.css";
import Container from "react-bootstrap/Container";

const HoverButton = styled.button`
        :hover {
		cursor: pointer;
		position: relative;
		top:  21px;
		left: 1px;
	}
`

export class  ClearDie extends React.Component {

	/* reset this die */
        cleardie = () => {
                this.props.updateRandValue("?");
        }

	render () {
		return (
			<Container style={{
                                background:"rgba(0,0,0,0)",
                                textAlign:"center",
                                fontSize:"20px",
				zIndex:"1"
                        }}>
				<HoverButton onClick={this.cleardie} className="official-cleardie-buttonstyle" >
					clear
				</HoverButton>
			</Container>
		);
	}
}

export default ClearDie;
