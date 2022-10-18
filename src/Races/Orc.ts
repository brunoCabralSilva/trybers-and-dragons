import Race from './Race';

export default class Orcs extends Race {
  private _maxLifePoints: number;
  private static _numberOfInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orcs._numberOfInstances += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this._numberOfInstances;
  }
}