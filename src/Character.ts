import Archetype, { Mage } from './Archetypes';
import Energy, { EnergyType } from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  private _type_: EnergyType;
  private _amount: number;

  constructor(name: string) {
    this._name = name;
    this._strength = Math.random() * (10 - 1) + 1;
    this._defense = Math.random() * (10 - 1) + 1;
    this._dexterity = Math.random() * (10 - 1) + 1;
    const elf = new Elf(this._name, this._dexterity);
    const mage = new Mage(this._name);
    this._race = elf;
    this._archetype = mage;
    this._lifePoints = (this._race.maxLifePoints);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._type_ = this._archetype.energyType;
    this._amount = Math.random() * (10 - 1) + 1;
    this._energy = {
      type_: this._type_,
      amount: this._amount,
    };
  }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number) {
    const comparation = attackPoints - this.defense;
    if (comparation > 0) this._lifePoints -= comparation;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    console.log(enemy, this._lifePoints);
  }

  special(enemy: Fighter) {
    console.log(enemy, this._lifePoints);
  }

  levelUp() {
    this._strength += Math.random() * (10 - 1) + 1;
    this._defense += Math.random() * (10 - 1) + 1;
    this._dexterity += Math.random() * (10 - 1) + 1;
    this._maxLifePoints += Math.random() * (10 - 1) + 1;

    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;

    this._amount = 10;
  }
}