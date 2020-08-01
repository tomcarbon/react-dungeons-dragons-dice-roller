/***************************************************
* A1.js: DICE SCREEN
**************************************************/
import React from "react";
import Die from "../components/Die";
import "../css/site.css"

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class A1 extends React.Component {

  render() {
      return (
	      <Container className="official-background-color official-body">
	      <Row>
	       <Col>
	      	<Die 
	      		diceType="d20" 
	      		diceFile="d20.png"
	      	/>
	       </Col>
	      </Row>
	      <Row>
	       <Col>
	      	<Die 
	      		diceType="d12" 
	      		diceFile="d12.png"
	      	/>
	       </Col>
	      </Row>
	      <Row>
	       <Col>
	      	<Die 
	      		diceType="d10" 
	      		diceFile="d10.png"
	      	/>
	       </Col>
	      </Row>
	      <Row>
	       <Col>
	      	<Die 
	      		diceType="d10 (x10)" 
	      		diceFile="d10x.png"
	      	/>
	       </Col>
	      </Row>
	      <Row>
	       <Col>
	      	<Die 
	      		diceType="d8" 
	      		diceFile="d8.png"
	      	/>
	       </Col>
	      </Row>
	      <Row>
	       <Col>
	      	<Die 
	      		diceType="d6" 
	      		diceFile="d6.png"
	      	/>
	       </Col>
	      </Row>
	      <Row>
	       <Col>
	      	<Die 
	      		diceType="d4" 
	      		diceFile="d4.png"
	      	/>
	       </Col>
	      </Row>
	      </Container>
      );
  }
}

export default A1;
