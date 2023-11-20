import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceTienda } from 'src/app/services/service.tienda';

@Component({
  selector: 'app-cubosmarca',
  templateUrl: './cubosmarca.component.html',
  styleUrls: ['./cubosmarca.component.css'],
})
export class CubosmarcaComponent implements OnInit {
  public cubos!: Cubo[];
  public marca!: string;

  constructor(
    private _service: ServiceTienda,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['marca']) {
        this.marca = params['marca'];
        this._service.getCubosMarca(this.marca).subscribe((response) => {
          this.cubos = response;
        });
      }
    });
  }
}
