import { Component, OnInit } from '@angular/core';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/Cubo';
import { ComentarioCubo } from 'src/app/models/Comentario';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css'],
})
export class CuboComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios!: ComentarioCubo[];

  constructor(
    private _service: ServiceTienda,
    private _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      if (params['id']) {
        this._service.getCubo(params['id']).subscribe((response) => {
          this.cubo = response;
        });
        this._service.getComentariosCubo(params['id']).subscribe((response) => {
          this.comentarios = response;
        });
      }
    });
  }
}
