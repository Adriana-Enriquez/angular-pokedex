import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

getPokemonDetails(id: number): Observable<any> {
  return this.httpClient.get{`https://pokeapi.co/api/v2/pokemon/${id}`};
}

}
