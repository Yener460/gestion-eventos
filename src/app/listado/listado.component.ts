import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EventoService } from '../evento.service';
import axios from 'axios';
@Component({
  selector: 'app-listado',
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent implements OnInit{
  evento: any = { id: 0, nombre: '', fecha: '', descripcion: '' }; 
  eventos: any[] = [];
  constructor(private router: Router, private eventoService: EventoService) {}
  ngOnInit(): void {
    this.cargarEventos();
  }
  async editarEvento(id: number): Promise<void> {
    this.router.navigate(['/editar-evento', id]);
}


async cargarEventos(): Promise<void> {
  try {
      this.eventos = await this.eventoService.obtenerTodosLosEventos(); 
      console.log('Eventos cargados:', this.eventos);
  } catch (error) {
      console.error('Error al cargar eventos:', error);
  }
}

  navegarCrearEvento() {
    this.router.navigate(['/crear-evento']); 
  }
  
  async eliminarEvento(id: number): Promise<void> {
    if (confirm('¿Estás seguro de que deseas eliminar este evento?'))
    try {
      await this.eventoService.eliminarEvento(id);
      console.log('Evento eliminado exitosamente');
      this.cargarEventos(); // Recarga la lista después de eliminar
    } catch (error) {
      console.error('Error al eliminar evento:', error);
    }
  }
  

}

