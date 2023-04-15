import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  correo: string="";
  asunto: string="";
  mensaje: string="";


  enviarFormulario(){
    console.log(this.correo)
    console.log(this.asunto)
    console.log(this.mensaje)
  }
}
