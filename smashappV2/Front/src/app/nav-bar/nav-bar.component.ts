import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players/players.service';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  query: string
  searchResults$

  constructor(public playersService:PlayersService) { }
  
  searchUser() {
    this.playersService.search(this.query).subscribe(
      (data) => {this.searchResults$ = data },
      error => console.log(error)
    );
    }
  ngOnInit() {
  }
}
