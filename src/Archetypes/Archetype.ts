import { EnergyType } from '../Energy';

export default abstract class Arquetype {
  protected _name: string;
  protected _special: number;
  protected _cost: number;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  public get name(): string {
    return this.name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public abstract get energyType(): EnergyType;

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }
}