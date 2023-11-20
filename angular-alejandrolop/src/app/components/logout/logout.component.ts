import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {
    if (environment.tokenUser.length > 0) environment.tokenUser = '';
    else this._router.navigate(['/']);
  }
}
