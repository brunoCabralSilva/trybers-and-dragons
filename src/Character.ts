import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

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

  constructor(name: string) {
    this._name = name;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._lifePoints = (this._race.maxLifePoints);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get energy(): Energy {
    return ({
      type_: this._energy.type_,
      amount: this._energy.amount,
    });
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  receiveDamage(attackPoints: number) {
    const comparation = attackPoints - this._defense;
    if (comparation > 0) this._lifePoints -= comparation;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this._strength);
  }

  special(enemy: Fighter) {
    enemy.receiveDamage(this._strength * 2);
  }

  levelUp() {
    const increment = getRandomInt(1, 10);

    if (this._lifePoints + increment < this._race.maxLifePoints) {
      this._maxLifePoints += increment;
    } else {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    
    this._strength += increment;
    this._defense += increment;
    this._dexterity += increment;
    this._energy.amount = 10;
    this._lifePoints = this._maxLifePoints;
  }
}