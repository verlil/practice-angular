import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Fried Eggs', 'So tasty!', 'https://i0.wp.com/eatlikeamanda.com/wp-content/uploads/2017/04/img_7995.jpg'),
    new Recipe('Fries', 'So tasty!!!', 'http://images.bigoven.com/image/upload/t_recipe-256/all-star-french-fries-dd49eb.jpg')
  ];

  getRecipes(){
    //return this.recipes;  - this wil return a reference to this array, not a copy
    return this.recipes.slice(); //this will return a copy of array
  }
}
