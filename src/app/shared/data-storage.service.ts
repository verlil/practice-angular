import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Recipe} from '../recipes/recipe.model';

@Injectable()
export class DataStorageService {
  constructor(private http: HttpClient,
              private recipeService: RecipeService) {
  }

  storeRecipes() {
    return this.http.put('https://recipe-book-c65eb.firebaseio.com/recipes.json',
      this.recipeService.getRecipes());
  }

  fetchRecipes() {
    this.http.get('https://recipe-book-c65eb.firebaseio.com/recipes.json')
      .pipe(map(data => {
        const recipes: Recipe[] = Object.values(data);
        for (let recipe of recipes) {
          if (!recipe['ingredient']) {
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      })).subscribe(data => {
        this.recipeService.setRecipes(Object.values(data));
    });
  }
}
