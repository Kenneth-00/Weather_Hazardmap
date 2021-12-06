import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  [x:string]: any;

  constructor(private routes: Router) { }

  ngOnInit(): void {
  }

  Currentnav: string = 'Home';
  newClass(current:string){

    this.Currentnav = current;
    this.routes.navigateByUrl('/main')
  }

}
