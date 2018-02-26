import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private title: string = 'app';

  constructor(private _router: Router) {}

  gotoShoppingcart() {
    this._router.navigate(['viewcart'])
  }

  gotoProfile() {
    this._router.navigate(['profile'])
  }

  gotoSignin() {
    this._router.navigate(['login']);
  }
}
