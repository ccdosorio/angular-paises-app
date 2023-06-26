import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino : string = '';
  hayError: boolean = false;
  paises  : Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.paisService.buscarPorPais(this.termino).subscribe({
      next: (resp) => {
        this.paises = resp;
      },
      error: () => {
        this.hayError = true;
        this.paises = [];
      }

    });
  }

  sugerencias(termino: string): void {
    console.log('sugerencias: ', termino);
    this.hayError = false;
    // TODO: Crear sugerencias
  }

}
