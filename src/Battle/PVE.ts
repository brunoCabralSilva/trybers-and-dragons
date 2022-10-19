import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _oponents: SimpleFighter[];

  constructor(character: Fighter, oponents: Fighter[] | SimpleFighter[]) {
    super(character);
    this._player = character;
    this._oponents = oponents;
  }

  fight(): number {
    for (let i = 0; i < this._oponents.length; i += 1) {
      while (this.player.lifePoints > 0 && this._oponents[i].lifePoints > 0) {
        this._oponents[i].attack(this._player);
        this._player.attack(this._oponents[i]);
      }
    }
    return super.fight();  
  }
}