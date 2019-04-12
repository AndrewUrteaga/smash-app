import {
  Injectable
} from '@angular/core';
import {
  Observable,
  BehaviorSubject
} from 'rxjs'
import {
  map,
  filter,
  tap
} from 'rxjs/operators'
import {
  HttpClient
} from '@angular/common/http'
import {
  IPlayers
} from './players.interface';
import {
  getPlayers
} from '@angular/core/src/render3/players';


@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  searchResults$ = new BehaviorSubject < IPlayers[] > (null);

  public playersUrl = "assets/players.json";

  constructor(public http: HttpClient) {}

  public getPlayers(): Observable < IPlayers[] > {
    return this.http.get < IPlayers[] > (this.playersUrl)
  }
  public search(q: string): Observable < IPlayers[] > {
    if (!q || q === '*') {
      q = '';
    } else {
      q = q.toLowerCase();
    }
    return this.getPlayers().pipe(
      map(players => this.filterPlayers(q, players)),
      tap(filteredPlayers => this.searchResults$.next(filteredPlayers))
    )
  }

  private filterPlayers(q: string, players: IPlayers[]) {
    return players.filter(player => player.gamertag.toLowerCase().includes(q) || player.name.toLowerCase().includes(q))
  }
}