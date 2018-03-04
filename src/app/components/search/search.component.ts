import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonService } from '../../DAL/common.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  private searchInput: string;
  constructor(private _commonService: CommonService) { }

  ngOnInit() {
    console.log('1st searchInput..', this.searchInput);
  }

  onSearchChange(str) {
    this._commonService.searchSubject.next(str);
  }



}
