import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() featureSeleced = new EventEmitter<string>();

  onSelect(feature:string){
    this.featureSeleced.emit(feature);
    console.log(event);
  }

  constructor() { }

  ngOnInit() {
  }

}
