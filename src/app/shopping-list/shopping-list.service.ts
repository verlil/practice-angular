import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingrediensChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Chockolate', 1),
    new Ingredient('Banana', 3)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingrediensChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // this.ingredients = this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    this.ingrediensChanged.emit(this.ingredients.slice());
  }

}
