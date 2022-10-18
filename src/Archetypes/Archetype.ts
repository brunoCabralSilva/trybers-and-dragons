import { EnergyType } from '../Energy';

export default abstract class Arquetype {
  private _name: string;
  private _special: number;
  private _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public abstract energyType(): EnergyType;

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}