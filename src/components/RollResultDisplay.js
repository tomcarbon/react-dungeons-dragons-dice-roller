/*******************************************
 * RollResultDisplay -- show the results of the roll
 * ****************************************/
import React from 'react';
import "../css/site.css";

export class  RollResultDisplay extends React.Component {

        render () {
                var z;
                if (this.props.totalClicks === 0) {
                        z = "darkred";
                } else {
                        z = "midnightblue";
                }
                return (
                        <div 
                                style={{
					marginTop: "5px",
                                        height:"60px", 
                                        width:"60px",
                                        background:"rgba(0,0,0,0.5)",
                                        color:z,
                                        textAlign:"center",
                                        verticalAlign:"middle",
                                        fontSize:"40px",
                                        borderRadius: "10px"
                                }}>
                                {this.props.diceResult}
                        </div>

                );
        }
}

export default RollResultDisplay;

