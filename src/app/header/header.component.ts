import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private database: DataStorageService) {
  }

  ngOnInit() {
  }

  onSaveData() {
    this.database.storeRecipes().subscribe(result => {
      console.log(result);
    });
  }

  onFetchData() {
    this.database.fetchRecipes();
  }

}
