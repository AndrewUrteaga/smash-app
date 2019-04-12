import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-players-details',
  templateUrl: './players-details.component.html',
  styleUrls: ['./players-details.component.css']
})
export class PlayersDetailsComponent implements OnInit {
// need to add getPlayer method to server to get requests
  constructor(private route:ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
  }
  onBack() {
    this.router.navigate(['/users'])
  }
}
