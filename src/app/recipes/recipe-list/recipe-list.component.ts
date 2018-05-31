import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Fried Eggs', 'So tasty!', 'https://i0.wp.com/eatlikeamanda.com/wp-content/uploads/2017/04/img_7995.jpg'),
    new Recipe('Fries', 'So tasty!!!', 'http://images.bigoven.com/image/upload/t_recipe-256/all-star-french-fries-dd49eb.jpg')
  ]
  @Output() recipeSelected = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

  ngOnInit() {
  }

}
