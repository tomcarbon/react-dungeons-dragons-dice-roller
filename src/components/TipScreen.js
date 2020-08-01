/*******************************************
* TipScreen.js -- demo
******************************************/
import React from "react";
import styled from "styled-components";
import ReactModal from 'react-modal';

const HoverButton = styled.button`
        :hover {
		cursor: pointer;
		position: relative;
		top:  1px;
		left: 1px;
	}
`
const HoverImage = styled.img`
        color: #000;
        :hover {
		cursor: pointer;
		position: relative;
		top:  1px;
		left: 1px;
	}
`

class TipScreen extends React.Component {

	closeTipScreen = () => {
		this.props.closeTipScreen();
	}

	componentDidMount() {
		    ReactModal.setAppElement('body');
	}

	render() {
		return(
			<ReactModal isOpen={this.props.isOpen} style={{background:"rgba(240,240,255,1.0)"}}> 
				<hr />
				<h4 style={{color:"red"}}>Buy Tom a cup of coffee!</h4>
				<hr />

				<div>
					<a href="https://paypal.me/tomcarbon1">
						<HoverImage src={require('../images/paypal.png')} alt="offline" style={{height:"30px"}}/>
					</a>

					<hr />
					<p><strong>Dogecoin (XDG)</strong>: DTCarbon6cWX1f5YTjidDrpEnypoatsrH8 or visit 
						<a href="https://dogepal.com/index.html?DPC=CVAB8IK#DPC">
							<HoverImage 	src={require('../images/dogepal.png')} 
								alt="offline"
								style={{height:"30px", marginLeft:"15px"}} 
							/>
						</a>
					</p>
					<hr />
					<p><strong>Litecoin (LTC)</strong>: MRKwP5woq9yA22HRDzW5GWVRmLvgi8yT1f </p>
					<hr />
					<p><strong>Bitcoin (BTC)</strong>: 3K5Dc2X2QsCsSiMgt3tuc4gGr8GxqeHyvq </p>
					<hr />
					<p><strong>Ethereum (ETH)</strong>: 0x3E41ff20343eBaa4Fb1B1F74929616d57FF2A560 </p>
					<hr />
					<p><strong>Basic Attention Token (BAT)</strong>: 0x94065591c5665C91bc7286E220a3a6b250486a8a </p>
					<hr />
					<p><strong>Bitcoin Cash (BCH)</strong>: qzgvhthf4myg4qlc57ea8macnt87mdwjfcw9cstchz </p>
					<hr />
					<p><strong>Dash (DASH)</strong>: Xf8SF1rD4XpYBcSmafJ7K5NwtC2j1Lk6aX </p>
					<hr />
					<p><strong>Ethereum Classic (ETC)</strong>: 0x387Da3fA5a82f6d333A6D49AFD12741Fa310e882 </p>
					<hr />
					<p><strong>Cosmos (ATOM)</strong>: cosmos1wqplt8a4uzwx5qae2fj4hwm45cqhkquwgf25mt </p>
					<hr />
					<p><strong>ZCash (ZEC)</strong>: t1PMsMadqjxe6Hpt4fDq87Pzfqdk5LuJvhT </p>
					<hr />
					<p><strong>Augur (REP)</strong>: 0xab954D85b2FC4D20f528F34D35fed7fD47219771 </p>
					<hr />
					<p><strong>Dai (DAI)</strong>: 0xd6eb1e47FB11dAD50E9808702eE00e50fFeD2340 </p>
					<hr />
					<p><strong>ChainLink (LINK)</strong>: 0xE8932Ab27996d8262c5641BDD8eD4afF0807b706 </p>
					<hr />

					<HoverButton onClick={this.closeTipScreen}
						style={{}}>
						Close
					</HoverButton>
				</div>
			</ReactModal>
		)
	}
}

export default TipScreen;

