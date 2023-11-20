import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cubo } from 'src/app/models/Cubo';
import { ServiceTienda } from 'src/app/services/service.tienda';
import { environment } from 'src/environments/environment.development';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createpedido',
  templateUrl: './createpedido.component.html',
  styleUrls: ['./createpedido.component.css'],
})
export class CreatepedidoComponent implements OnInit {
  public cubos!: Cubo[];

  @ViewChild('selectcubo') selectCubo!: ElementRef;

  constructor(private _service: ServiceTienda, private _router: Router) {}

  ngOnInit(): void {
    if (environment.tokenUser.length > 0) {
      this._service.getCubos().subscribe((response) => {
        this.cubos = response;
      });
    } else this._router.navigate(['/']);
  }
  comprarCubo(): void {
    let cubo = this.selectCubo.nativeElement.value;
    this._service.comprarCubo(cubo).subscribe((response) => {
      this._router.navigate(['/compras']);
    });
  }
}
