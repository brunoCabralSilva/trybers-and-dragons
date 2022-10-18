import { EnergyType } from '../Energy';
import Arquetype from './Archetype';

export default class Ranger extends Arquetype {
  protected _energyType: EnergyType;
  protected static _numberOfInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._numberOfInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this._numberOfInstances;
  }
}