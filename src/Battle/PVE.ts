import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _oponents: SimpleFighter[];

  constructor(character: Fighter, oponents: SimpleFighter[]) {
    super(character);
    this._player = character;
    this._oponents = oponents;
  }

  public fight(): number {
    this._oponents.forEach((enemy) => {
      while (this._player.lifePoints > 0 && enemy.lifePoints > 0) {
        this._player.attack(enemy);
        enemy.attack(this._player);
      }
    });
    return super.fight();
  }
}