import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventoService } from '../evento.service';
@Component({
  selector: 'app-crear-evento',
  imports: [],
  templateUrl: './crear-evento.component.html',
  styleUrl: './crear-evento.component.css'
})

export class CrearEventoComponent {
  evento = { nombre: '', fecha:'', descripcion: '' }; 

  constructor(private router: Router, private eventoService: EventoService) {}

  async crearEvento() {
    try {
      await this.eventoService.crearEvento(this.evento).then(() => {
        console.log('Evento creado exitosamente');
        this.evento = { nombre: '', fecha: '', descripcion: '' }; 
      }
   ) } catch (error) {
      console.error('Error al crear evento:', error);
    }
  }
  actualizarEvento(event: Event, campo: string) {
    const input = event.target as HTMLInputElement;

    if (campo === 'nombre') {
      this.evento.nombre = input.value;
    } else if (campo === 'fecha') {
      this.evento.fecha = input.value;
    } else if (campo === 'descripcion') {
      this.evento.descripcion = input.value;
    }
  }
  
}

