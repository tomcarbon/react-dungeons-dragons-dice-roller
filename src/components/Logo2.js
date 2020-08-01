/*******************************************
 * Display the Logo2.jpg
 * ****************************************/
import React from 'react';

class Logo2 extends React.Component {
	/*
        constructor(props) {
		super(props);
	}
	*/
	
	render () {
		return (
			<img hidden={this.props.eyeClosed} 
				style={{pointerEvents:'none'}}
				className="offical-background-color offical-logo2" 
				src={require('../images/logo2.png') } alt="offline" 
			/>
		);
	}
}

export default Logo2;
