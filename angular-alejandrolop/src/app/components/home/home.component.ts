import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cubos!: Cubo[];

  constructor(private _service: ServiceTienda) {}

  ngOnInit(): void {
    this._service.getCubos().subscribe((response) => {
      this.cubos = response;
    });
  }
}
