import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-evento',
  imports: [FormsModule],
  templateUrl: './editar-evento.component.html',
  styleUrl: './editar-evento.component.css'
})

export class EditarEventoComponent  {
  evento = { id: 0, nombre: '', fecha: '' };

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const eventos = [
      { id: 1, nombre: 'Concierto de Rock', fecha: '2025-04-20' },
      { id: 2, nombre: 'Fiesta de Año Nuevo', fecha: '2025-12-31' },
    ];
    this.evento = eventos.find(evento => evento.id === id) || this.evento;
  }

  guardarCambios() {
    alert(`Evento actualizado: ${this.evento.nombre}`);
    this.router.navigate(['/listado']); 
  }
}


