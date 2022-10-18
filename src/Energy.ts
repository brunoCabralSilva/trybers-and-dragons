export type EnergyType = 'mana' | 'stamina';

export interface Energy {
  type_: EnergyType;
  amount: number;
}