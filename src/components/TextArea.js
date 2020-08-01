/*******************************************
 * Display the TextArea for D&D private msg.
 * ****************************************/
import React from 'react';
import "../css/site.css"

class TextArea extends React.Component {
	constructor(props) {
		super (props);
                this.handleChange = this.handleChange.bind(this);
                var updateTextArea = this.props.updateTextArea;
                updateTextArea("");

	}

        handleChange(event) {
                var updateTextArea = this.props.updateTextArea;
                updateTextArea(event.target.value);
        }

	render () {
		return (
			<textarea 
				onChange={this.handleChange}
				value={this.props.textMsg}
				spellCheck="false"
				className="official-textarea">
			</textarea>
		);
	}
}

export default TextArea;
