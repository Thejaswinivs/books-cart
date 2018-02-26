import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  private profileInfo: any = {
    'name': 'Nagendra gandla',
    'email': 'nagendragandla002@gmail.com',
    'gender': 'Male',
    'mobile_number': +917829679367,
    'address': {
      'plat_no': '#45/1, Naipunya layout',
      'street': 'Varanasi Main Road',
      'city': 'Bengaluru',
      'pincode': 515231
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
