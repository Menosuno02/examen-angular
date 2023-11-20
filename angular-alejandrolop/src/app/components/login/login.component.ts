import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('controlemail') controlEmail!: ElementRef;
  @ViewChild('controlpass') controlPass!: ElementRef;

  constructor(private _service: ServiceTienda, private _router: Router) {}

  iniciarSesion(): void {
    let email = this.controlEmail.nativeElement.value;
    let pass = this.controlPass.nativeElement.value;
    this._service.loginUser(email, pass).subscribe((response) => {
      environment.tokenUser = response.response;
      this._router.navigate(['/']);
    });
  }
}
