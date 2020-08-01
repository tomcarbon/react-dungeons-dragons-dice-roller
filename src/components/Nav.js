/********************************************************************
 * Nav -- navigation for the site
 *******************************************************************/
import React from 'react';
import A1 from "../Screens/A1" // Dice
import B1 from "../Screens/B1" // Text
import C1 from "../Screens/C1" // about
import D1 from "../Screens/D1" // Word Streamer
import E1 from "../Screens/E1" // Shopping List Tool


class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            initialText: ""
        };
    }

    newText = (a) => {
        this.setState({ initialText: a });
    }

    render() {
        var newText = this.newText;
        if (this.props.dest === 'A1') {
            return ( <
                A1 / >
            );
        } else if (this.props.dest === 'B1') {
            return ( <
                B1 initialText = { this.state.initialText }
                newText = { newText.bind(this) }
                />
            );
        } else if (this.props.dest === 'C1') {
            return ( <
                C1 / >
            );
        } else if (this.props.dest === 'D1') {
            return ( <
                D1 / >
            );
        } else if (this.props.dest === 'E1') {
            return ( <
                E1 / >
            );
        } else {
            console.info("Unexpected value of " + this.props.dest + "'. Resetting to A1");
            return ( <
                A1 / >
            );
        }
    }
}
export default Nav;