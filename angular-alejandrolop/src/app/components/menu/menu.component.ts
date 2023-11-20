import { Component, DoCheck, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit, DoCheck {
  public marcas!: string[];
  public token!: string;

  constructor(private _service: ServiceTienda) {}

  ngOnInit(): void {
    this._service.getMarcas().subscribe((response) => {
      this.marcas = response;
    });
    this.token = environment.tokenUser;
  }

  ngDoCheck(): void {
    this.token = environment.tokenUser;
  }
}
