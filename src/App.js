/******************************************************
 * docker-react-dungeons-dragons-dice-roller
 * App.js TCC 20200119
 * Getting Started, see Nav.js in the components directory (Navigation),
 * which navigates to one of three Screens which can be found in the /Screens directory:
 *       A1.js -- Dice Screen
 *       B1.js -- Private Messages/Notes Screen
 *       C1.js -- Information Screen
 * ********************************************************/
import React from 'react';
import MenuBar from "./components/MenuBar";
import Nav from "./components/Nav";
import "./css/site.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			dest: 'E1',
		};
	}

	handleToUpdate(a){
		/* variable passed from menu buttons located at MenuBar.js */
		this.setState({dest:a});
	}

	render() {
	  var handleToUpdate = this.handleToUpdate;
	  return (
		  <div className="official-background-color">
			<MenuBar 
		  		handleToUpdate={handleToUpdate.bind(this)} 
		  	/>

		  	<Nav 	
		  		dest={this.state.dest} 
		  	/>
		  </div>
	  );
	}
}

