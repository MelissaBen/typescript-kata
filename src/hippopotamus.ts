// Créer une class Hippopotamus qui hérite de la classe Animal
// modifier la méthode eat pour que l'hippopotame prenne 20 de poids si l'aliment qu'il mange est un légume
// si l'aliment qu'il mange est de la viande, il pousse (renvoie) un cri de dégout : "beurk" et son weight n'augmente pas
// l'hippopotame perd 20 de poids lorsqu'il dort
// ajouter une méthode swim() qui ne renvoie rien mais baisse le poids de 50.

import Food from './food/food';
import Animal from './animal.class';

export default class Hippopotamus extends Animal  {

  constructor(name: string, weight: number) {
    super(name, weight);
  }

  eat<T extends Food>(food: T): void | string {
    if (food.isVegan()) {
      this.weight = this.weight + 20;
    } else {
      return "beurk";
    }
  }

  sleep(){
    if (this.weight < 20) {
      this.weight = 0
    } else {
      this.weight = this.weight - 20;
    }
  }

  swim(): void {
    if (this.weight < 50) {
      this.weight = 0
    } else {
      this.weight = this.weight - 50;
    }
  }

}
