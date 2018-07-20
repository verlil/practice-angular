import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loading, only if we visit this url
  {path: 'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}

];

// @NgModule transforms an ordinary TS class into a module
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // forRoot - only for root module, for the other modules use forChild
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
