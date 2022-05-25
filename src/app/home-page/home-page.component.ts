import { Component, OnInit } from '@angular/core';


import { SNEAKERS } from '../mock-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 
  sneakers = SNEAKERS

  constructor() { }

  ngOnInit(): void {
    console.log(this.sneakers)
  }

}
