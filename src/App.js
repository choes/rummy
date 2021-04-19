import { Client } from "boardgame.io/react";
import { Debug } from "boardgame.io/debug"
import { Local } from "boardgame.io/multiplayer"
import { default as Rummy } from "./Rummy";
import { default as RummyBoard } from "./RummyBoard";

const App = Client({
	game: Rummy,
	numPlayers: 2,
	board: RummyBoard,
	multiplayer: Local(),
	debug: { impl: Debug },
});

export default App;
