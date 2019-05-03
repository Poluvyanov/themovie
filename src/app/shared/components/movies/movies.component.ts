import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent implements OnInit {

  text: Array<any>;
  array: Array<any>;
  constructor() {
    
   }

  

  ngOnInit() {
    this.text = [0,10,555,47588].map( num => 
      num.toString().padStart(10, '0')) 
console.log(this.text)
    }


}
