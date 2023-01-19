const info = document.getElementById("info");
const upgrade = document.getElementById("upgrade");



class Player {

  constructor(name, hp, mana, as, dmg, money) {
    this.name = name;
    this.hp = hp;
    this.mana = mana;
    this.as = as;
    this.dmg = dmg;
    this.money = money;
  }

  updateInfo(pa) {
    pa.innerHTML = `<p>Name: ${this.name}</p>
     <p>HP: ${this.hp}</p>
     <p>Mana: ${this.mana}</p>
     <p>As: ${this.as}</p>  
     <p>Dmg: ${this.dmg}</p>
     <p>Money: ${this.money}</p>`;
  }

  upgradeStats() {
    this.hp++;
    this.mana++;
    this.as++;
    this.dmg++;
  }
  
}

const player = new Player("Rocky", 10, 100, 1.2, 1.5, 0);
player.updateInfo(info);
console.log(player)


upgrade.onclick = () => {
  player.upgradeStats();
  player.updateInfo(info);
  
  if () {

  }
};


