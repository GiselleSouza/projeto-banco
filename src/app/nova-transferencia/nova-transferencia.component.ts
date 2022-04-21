import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  valor: Number = 0;
  destino: Number = 0;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor() {
   }

  ngOnInit(): void {
  }

  transferir(){
    console.log("Solicitada nova transferência!");
    this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
