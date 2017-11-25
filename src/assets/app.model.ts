import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from '../app/app.component';
import { RecepiesComponent } from '../app/recepies/recepies.component';
import { HeaderComponent } from '../app/header/header.component';
import { RecepieListComponent } from '../app/recepies/recepie-list/recepie-list.component';
import { ShoppingListComponent } from '../app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from '../app/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeItemComponent } from '../app/recepies/recepie-list/recipe-item/recipe-item.component';
import {RecepieDetailComponent} from "../app/recepies/recepie-detail/recepie-detail.component";


@NgModule({
  declarations: [
    AppComponent,
    RecepiesComponent,
    HeaderComponent,
    RecepieListComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    RecepieDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
