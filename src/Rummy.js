import { PlayerView, Stage } from "boardgame.io/core";

const Rummy = {
	name: "rummy",
	setup: setUp,
	moves: {
	},
	stages: {
	},
	turn: {
	},
	playerView: PlayerView.STRIP_SECRETS,
	endIf: G => {
	},
};

function setUp(ctx) {
}

export default Rummy;
