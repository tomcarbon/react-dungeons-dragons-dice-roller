/*******************************************
 * Display a die with its components.
 *****************************************/
import React from 'react';
import "../css/site.css"
import DiceImage from './DiceImage';
import RollResultDisplay from './RollResultDisplay';
import RollButton from "./RollButton";
import ClearDie from "./ClearDie";
import DiceTypeDisplay from "./DiceTypeDisplay";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class Die extends React.Component {
        constructor() {
                super ();
                this.state = {
                        diceResult: "?",
                        totalClicks: 0,
                };
        }

	/* rand is the result of the randomizer, sometimes '00', sometimes '?' */
        updateRandValue = (rand) => {
                this.setState({diceResult: rand});
                if (this.state.totalClicks === 0) {
                        this.setState({totalClicks: 1});
                } else {
                        this.setState({totalClicks: 0});
                }
        }

        render () {
                return (
			<Container className='official-die'>
			    <Row>
			      <Col xs="4" sm="2">
                                <DiceImage
                                        diceFile={this.props.diceFile}
                                />
			      </Col>
			      <Col xs="4" sm="3">
                                <DiceTypeDisplay
                                        diceType={this.props.diceType}
                                />
			      </Col>
			      <Col xs="4" sm="2">

                                <RollButton
                                        updateRandValue={this.updateRandValue.bind(this)}
                                        diceType={this.props.diceType}
                                />
			      </Col>
			      <Col xs="4" sm="3">
                                <RollResultDisplay
                                        totalClicks={this.state.totalClicks}
                                        diceResult={this.state.diceResult}
                                />
			      </Col>
			      <Col xs="4" sm="2">
                                <ClearDie
                                        updateRandValue={this.updateRandValue.bind(this)}
                                />
			      </Col>
			    </Row>
                        </Container>
                );
        }
}

export default Die;

