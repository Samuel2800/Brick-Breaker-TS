var Game = /** @class */ (function () {
    function Game(_version) {
        this._version = _version;
    }
    Game.prototype.init = function () {
        // TODO
    };
    Object.defineProperty(Game.prototype, "version", {
        get: function () {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    return Game;
}());
export { Game };
//# sourceMappingURL=game.js.map