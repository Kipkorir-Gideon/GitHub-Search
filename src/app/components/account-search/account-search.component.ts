import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-search',
  templateUrl: './account-search.component.html',
  styleUrls: ['./account-search.component.css']
})
export class AccountSearchComponent implements OnInit {

  public username!: string;
  @Output() accountSearch = new EventEmitter<any>();

  constructor() { }

  searchAccount() {
    this.accountSearch.emit(this.username);
  }

  ngOnInit(): void {
  }

}
