import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'}

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
