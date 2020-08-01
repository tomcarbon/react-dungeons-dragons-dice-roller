/*******************************************
 * Shopping List Tool
									style={{position:"absolute", right:"20px", top:"20px"}} />
 * ****************************************/
import React from 'react';
//import Container from "react-bootstrap/Container";
import ArrowButton from "./ArrowButton";

class ShoppingTool extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			r1: false,
			r2: false,
			r3: false,
			r4: false,
			r5: false,
			r6: false,
			r7: false,
			r8: false,
			r9: false,
			r10: false,
			r11: false,
			r12: false,
			r13: false,
			r14: false,
			r15: false,
			r16: false,
			r17: false,
			r18: false,
			r19: false,
			r20: false,
			l1: false,
			l2: false,
			l3: false,
			l4: false,
			l5: false,
			l6: false,
			l7: false,
			l8: false,
			l9: false,
			l10: false,
			l11: false,
			l12: false,
			l13: false,
			l14: false,
			l15: false,
			l16: false,
			l17: false,
			l18: false,
			l19: false,
			l20: false,
		}
	}

	flipIt(a){
		var x = !this.state[a];
		this.setState({[a]: x});
	}

	render() {
	  var flipIt = this.flipIt;
		return (
					<div style={{position:"relative", left:"0", top:"0", width:"435px"}}>
						<img src={require('../images/shopping-main.png')} 
						    style={{position:"relative", top:"0px", left:"0px"}} alt="offline" 
						/>


						<ArrowButton idx="l1" flipIt={flipIt.bind(this)} showit={this.state.l1} top="35px" left="25px"></ArrowButton>
						<ArrowButton idx="l2" flipIt={flipIt.bind(this)} showit={this.state.l2} top="60px" left="25px"></ArrowButton>
						<ArrowButton idx="l3" flipIt={flipIt.bind(this)} showit={this.state.l3} top="88px" left="25px"></ArrowButton>
						<ArrowButton idx="l4" flipIt={flipIt.bind(this)} showit={this.state.l4} top="115px" left="25px"></ArrowButton>
						<ArrowButton idx="l5" flipIt={flipIt.bind(this)} showit={this.state.l5} top="140px" left="28px"></ArrowButton>
						<ArrowButton idx="l6" flipIt={flipIt.bind(this)} showit={this.state.l6} top="170px" left="28px"></ArrowButton>
						<ArrowButton idx="l7" flipIt={flipIt.bind(this)} showit={this.state.l7} top="190px" left="28px"></ArrowButton>
						<ArrowButton idx="l8" flipIt={flipIt.bind(this)} showit={this.state.l8} top="215px" left="28px"></ArrowButton>
						<ArrowButton idx="l9" flipIt={flipIt.bind(this)} showit={this.state.l9} top="240px" left="28px"></ArrowButton>
						<ArrowButton idx="l10" flipIt={flipIt.bind(this)} showit={this.state.l10} top="265px" left="30px"></ArrowButton>
						<ArrowButton idx="l11" flipIt={flipIt.bind(this)} showit={this.state.l11} top="290px" left="32px"></ArrowButton>
						<ArrowButton idx="l12" flipIt={flipIt.bind(this)} showit={this.state.l12} top="315px" left="32px"></ArrowButton>
						<ArrowButton idx="l13" flipIt={flipIt.bind(this)} showit={this.state.l13} top="335px" left="32px"></ArrowButton>
						<ArrowButton idx="l14" flipIt={flipIt.bind(this)} showit={this.state.l14} top="360px" left="33px"></ArrowButton>
						<ArrowButton idx="l15" flipIt={flipIt.bind(this)} showit={this.state.l15} top="385px" left="34px"></ArrowButton>
						<ArrowButton idx="l16" flipIt={flipIt.bind(this)} showit={this.state.l16} top="410px" left="30px"></ArrowButton>
						<ArrowButton idx="l17" flipIt={flipIt.bind(this)} showit={this.state.l17} top="431px" left="30px"></ArrowButton>
						<ArrowButton idx="l18" flipIt={flipIt.bind(this)} showit={this.state.l18} top="450px" left="30px"></ArrowButton>
						<ArrowButton idx="l19" flipIt={flipIt.bind(this)} showit={this.state.l19} top="470px" left="32px"></ArrowButton>
						<ArrowButton idx="l20" flipIt={flipIt.bind(this)} showit={this.state.l20} top="493px" left="33px"></ArrowButton>

						<ArrowButton idx="r1" flipIt={flipIt.bind(this)} showit={this.state.r1} top="35px" right="15px"></ArrowButton>
						<ArrowButton idx="r2" flipIt={flipIt.bind(this)} showit={this.state.r2} top="60px" right="15px"></ArrowButton>
						<ArrowButton idx="r3" flipIt={flipIt.bind(this)} showit={this.state.r3} top="88px" right="15px"></ArrowButton>
						<ArrowButton idx="r4" flipIt={flipIt.bind(this)} showit={this.state.r4} top="115px" right="15px"></ArrowButton>
						<ArrowButton idx="r5" flipIt={flipIt.bind(this)} showit={this.state.r5} top="140px" right="18px"></ArrowButton>
						<ArrowButton idx="r6" flipIt={flipIt.bind(this)} showit={this.state.r6} top="170px" right="18px"></ArrowButton>
						<ArrowButton idx="r7" flipIt={flipIt.bind(this)} showit={this.state.r7} top="190px" right="18px"></ArrowButton>
						<ArrowButton idx="r8" flipIt={flipIt.bind(this)} showit={this.state.r8} top="215px" right="18px"></ArrowButton>
						<ArrowButton idx="r9" flipIt={flipIt.bind(this)} showit={this.state.r9} top="240px" right="18px"></ArrowButton>
						<ArrowButton idx="r10" flipIt={flipIt.bind(this)} showit={this.state.r10} top="265px" right="20px"></ArrowButton>
						<ArrowButton idx="r11" flipIt={flipIt.bind(this)} showit={this.state.r11} top="290px" right="22px"></ArrowButton>
						<ArrowButton idx="r12" flipIt={flipIt.bind(this)} showit={this.state.r12} top="315px" right="22px"></ArrowButton>
						<ArrowButton idx="r13" flipIt={flipIt.bind(this)} showit={this.state.r13} top="335px" right="22px"></ArrowButton>
						<ArrowButton idx="r14" flipIt={flipIt.bind(this)} showit={this.state.r14} top="360px" right="23px"></ArrowButton>
						<ArrowButton idx="r15" flipIt={flipIt.bind(this)} showit={this.state.r15} top="385px" right="24px"></ArrowButton>
						<ArrowButton idx="r16" flipIt={flipIt.bind(this)} showit={this.state.r16} top="410px" right="25px"></ArrowButton>
						<ArrowButton idx="r17" flipIt={flipIt.bind(this)} showit={this.state.r17} top="431px" right="30px"></ArrowButton>
						<ArrowButton idx="r18" flipIt={flipIt.bind(this)} showit={this.state.r18} top="450px" right="30px"></ArrowButton>
						<ArrowButton idx="r19" flipIt={flipIt.bind(this)} showit={this.state.r19} top="470px" right="30px"></ArrowButton>
						<ArrowButton idx="r20" flipIt={flipIt.bind(this)} showit={this.state.r20} top="490px" right="30px"></ArrowButton>

					</div>
									


		);
	}
}

export default ShoppingTool;
