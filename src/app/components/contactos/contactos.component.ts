import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.scss']
})
export class ContactosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
correo: string ="";
asunto: string="";
comentario: string="";

enviarComentario() {
  console.log(`Correo: ${this.correo}`);
  console.log(`Asunto: ${this.asunto}`);
  console.log(`Comentario: ${this.comentario}`);
}


}
