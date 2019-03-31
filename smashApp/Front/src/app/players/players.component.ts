import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
user: any[] = [
  {
"name": "Drew",
"gamertag": "DaddyDrew",
"picture": null,
"main": "Ganon" ,
"secondary": "Samus",
"gender": "male",
"wins": 4 ,
"loses": 2,
"winRatio": "58%",
"username": "Daddy"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
