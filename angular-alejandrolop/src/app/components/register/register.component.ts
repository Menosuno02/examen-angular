import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  @ViewChild('controlnombre') controlNombre!: ElementRef;
  @ViewChild('controlemail') controlEmail!: ElementRef;
  @ViewChild('controlpass') controlPass!: ElementRef;

  constructor(private _service: ServiceTienda, private _router: Router) {}

  registrarUsuario() {
    let nombre = this.controlNombre.nativeElement.value;
    let email = this.controlEmail.nativeElement.value;
    let pass = this.controlPass.nativeElement.value;
    this._service.registerUser(nombre, email, pass).subscribe((response) => {
      this._router.navigate(['/']);
    });
  }
}
