import {Component, OnInit} from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';
import {AuthService} from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: any;

  constructor(private database: DataStorageService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.isAuthenticated = this.authService.isAuthenticated();
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
