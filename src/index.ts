import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Legolas');
const player2 = new Character('Aragorn');
const player3 = new Character('Faramir');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

player1.levelUp();
player1.levelUp();
player1.levelUp();

const runBattles = (battles: Battle[]) => {
  for (let i = 0; i < battles.length; i += 1) {
    battles[i].fight();
  }
}

export { 
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};

