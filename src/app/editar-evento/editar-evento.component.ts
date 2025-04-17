import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EventoService } from '../evento.service';
@Component({
  selector: 'app-editar-evento',
  imports: [FormsModule],
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.css'
})
export class EditarEventoComponent  {
  evento = { id: 0, nombre: '', fecha: '', descripcion:'' };
  constructor(private route: ActivatedRoute, private router: Router,private eventoService: EventoService) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')); 
    console.log('ID obtenido:', id); 
  
    if (!isNaN(id) && id > 0) {
        this.eventoService.obtenerEventos(id).then((eventos: any[]) => {
            const evento = eventos.find((e: any) => e.id === id);
            if (evento) {
                this.evento = evento;

                if (this.evento.fecha) {
                  this.evento.fecha = new Date(this.evento.fecha).toISOString().split('T')[0];
              } 
                console.log('Evento cargado:', this.evento);
            } else {
                console.error('El evento no existe');
                this.router.navigate(['/listado']); 
            }
        }).catch((error: any) => {
            console.error('Error al cargar eventos:', error);
        });
    } else {
        console.error('ID inválido:', id);
        this.router.navigate(['/listado']);
    }
  
}

guardarCambios(): void {
  this.eventoService.actualizarEvento(this.evento.id, this.evento).then(() => {
      console.log('Evento actualizado correctamente');
      this.router.navigate(['/listado']);
  }).catch(error => {
      console.error('Error al actualizar evento:', error);
  });
}
  
  async cargarEventos(): Promise<void> {
  }
}
