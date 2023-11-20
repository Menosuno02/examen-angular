import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { Compra } from 'src/app/models/Compra';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css'],
})
export class ComprasComponent implements OnInit {
  public compras!: Compra[];

  constructor(private _service: ServiceTienda, private _router: Router) {}

  ngOnInit(): void {
    if (environment.tokenUser.length > 0) {
      this._service.getCompras().subscribe((response) => {
        this.compras = response;
      });
    } else {
      this._router.navigate(['/']);
    }
  }
}
