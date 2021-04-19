import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragDropContext } from "react-beautiful-dnd";


class RummyBoard extends Component {
	render() {
		return (
			<div className="game">
				<DragDropContext>
				</DragDropContext>
			</div>
		);
	}
}

RummyBoard.propTypes = {
	G: PropTypes.object,
	ctx: PropTypes.object,
};

export default RummyBoard;
