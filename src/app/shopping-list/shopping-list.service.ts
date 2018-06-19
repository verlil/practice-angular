import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class ShoppingListService {
  ingrediensChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Chockolate', 1),
    new Ingredient('Banana', 3)
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, ingredient: Ingredient) {
    this.ingredients[index] = ingredient;
    this.ingrediensChanged.next(this.ingredients.slice());
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingrediensChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    // this.ingredients = this.ingredients.concat(ingredients);
    this.ingredients.push(...ingredients);
    this.ingrediensChanged.next(this.ingredients.slice());
  }

}
