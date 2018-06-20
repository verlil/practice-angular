import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fried Eggs',
      'So tasty!',
      'https://i0.wp.com/eatlikeamanda.com/wp-content/uploads/2017/04/img_7995.jpg?resize=256%2C256&ssl=1',
      [
        new Ingredient('Egs', 3),
        new Ingredient('Fire', 2),
        new Ingredient('Frying pan', 1),
      ]),
    new Recipe(
      'Fries',
      'So tasty!!!',
      'https://i.pinimg.com/originals/a1/57/3d/a1573de0052f9bac826e734af3e2d19b.jpg',
      [
        new Ingredient('Potato', 4),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
        new Ingredient('Oil', 3),
      ])
  ];

  getRecipes() {
    //return this.recipes;  - this wil return a reference to this array, not a copy
    return this.recipes.slice(); //this will return a copy of array
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

}
