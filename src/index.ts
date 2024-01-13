import { Game } from './game';

const game: Game = new Game(
    '1.0'
);

game.init();

document.write(
    `Bricks Breaking v${game.version}`
);
