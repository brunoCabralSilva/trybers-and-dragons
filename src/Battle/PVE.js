"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(character, oponents) {
        super(character);
        this._player = character;
        this._oponents = oponents;
    }
    fight() {
        for (let i = 0; i < this._oponents.length; i += 1) {
            while (this.player.lifePoints > 0 && this._oponents[i].lifePoints > 0) {
                this._oponents[i].attack(this._player);
                this._player.attack(this._oponents[i]);
            }
        }
        return super.fight();
    }
}
exports.default = PVE;
