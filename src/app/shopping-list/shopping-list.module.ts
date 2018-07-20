import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {SharedModule} from '../shared/shared.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    FormsModule,
    ShoppingListRoutingModule,
    SharedModule
  ]
})
export class ShoppingListModule {

}
