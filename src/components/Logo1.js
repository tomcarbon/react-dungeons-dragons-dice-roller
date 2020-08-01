/*******************************************
 * Display the Logo1.jpg
 * ****************************************/
import React from 'react';

class Logo1 extends React.Component {
	/*
        constructor(props) {
		super(props);
	}
	*/

	render() {
		return (
			<img hidden={this.props.eyeOpen} 
				style={{pointerEvents:'none'}}
				className="offical-background-color offical-logo1" 
				src={require('../images/logo1.png') } alt="offline" 
			/>
		);
	}
}

export default Logo1;
