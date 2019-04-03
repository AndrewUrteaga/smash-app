import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
Users: any[] = [
  {
"name": "Drew",
"gamertag": "DaddyDrew",
"picture": null,
"main": "Ganon" ,
"secondary": "Samus",
"gender": "Male",
"wins": 4 ,
"loses": 2,
"winRatio": "58%",
"username": "Daddy",
"elite": true
  },
  {
    "name": "Liez",
    "gamertag": "Doughnut",
    "picture": null,
    "main": "Kirby" ,
    "secondary": "Samus",
    "gender": "Female",
    "wins": 4 ,
    "loses": 2,
    "winRatio": "2%",
    "username": "Liezzy",
    "elite": false
      }
]
  constructor() { }

  ngOnInit() {
  }

}
