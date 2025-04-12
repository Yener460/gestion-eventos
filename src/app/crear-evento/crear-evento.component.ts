import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-evento',
  imports: [],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})

export class CrearEventoComponent {
  evento = { nombre: '', fecha: '', descripcion: '' }; 

  constructor(private router: Router) {}

  guardarEvento() {
    console.log('Evento guardado:', this.evento);
    alert('Evento creado correctamente');
    this.router.navigate(['/listado']); 
  }
}