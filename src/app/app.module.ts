import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ObservableComponent } from './observable/observable.component';
import { CategoriesModule } from './categories/categories.module';
import { RouterModule } from '@angular/router';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonsModule } from './pokemons/pokemons.module';
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ObservableComponent,
    PageNotFoundComponent,
    PokemonDetailComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    CategoriesModule,
    PokemonsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'category-list', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
