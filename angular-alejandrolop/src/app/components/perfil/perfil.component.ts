import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  public user!: Usuario;

  constructor(private _service: ServiceTienda, private _router: Router) {}

  ngOnInit(): void {
    if (environment.tokenUser.length > 0)
      this._service.perfilUser().subscribe((response) => {
        this.user = response;
      });
    else this._router.navigate(['/']);
  }
}
