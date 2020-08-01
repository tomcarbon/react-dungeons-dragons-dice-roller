/*******************************************
 * Arrow Button for the Shopping Tool
 * ****************************************/
import React from 'react';

class ArrowButton extends React.Component {

	render() {
		var flipIt = this.props.flipIt;
		if (this.props.idx.slice(0,1) === 'r') {
			return (
				<div>
						<img src={require('../images/shopping-arrow-right-1.png')} alt="offline" 
								onClick={() => flipIt(this.props.idx)}
								hidden={!this.props.showit}
								style={{position:"absolute", top:this.props.top, right:this.props.right}}
						></img>
						<img src={require('../images/shopping-arrow-right-1-clear.png')} alt="offline" 
								onClick={() => flipIt(this.props.idx)}
								hidden={this.props.showit}
								style={{position:"absolute", top:this.props.top, right:this.props.right}}
						></img>
				</div>
			);
		} else {
			return (
				<div>
						<img src={require('../images/shopping-arrow-left-1.png')} alt="offline" 
								onClick={() => flipIt(this.props.idx)}
								hidden={!this.props.showit}
								style={{position:"absolute", top:this.props.top, left:this.props.left}}
						></img>
						<img src={require('../images/shopping-arrow-left-1-clear.png')} alt="offline" 
								onClick={() => flipIt(this.props.idx)}
								hidden={this.props.showit}
								style={{position:"absolute", top:this.props.top, left:this.props.left}}
						></img>
				</div>
			);
		}
	}
}

export default ArrowButton;
