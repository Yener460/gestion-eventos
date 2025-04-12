import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})


export class ListadoComponent {
  eventos = [
    { id: 1, nombre: 'Concierto de Rock', fecha: '2025-04-20' },
    { id: 2, nombre: 'Fiesta de Año Nuevo', fecha: '2025-12-31' },
  ];

  constructor(private router: Router) {}

  navegarCrearEvento() {
    this.router.navigate(['/crear-evento']); 
  }

  editarEvento(id: number) {
    console.log(`Redirigiendo al evento con ID: ${id}`);
    this.router.navigate([`/editar-evento`, id]); 
  }

  eliminarEvento(id: number) {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?')) {
      this.eventos = this.eventos.filter(evento => evento.id !== id);
      alert('Evento eliminado correctamente');
    }
  }
}

