import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root',
})
export class EventoService {
  private apiUrl = 'http://localhost:3000/eventos';
  
  async obtenerEventos(id: number): Promise<any> {
    try {
        const response = await axios.get(`http://localhost:3000/eventos`);
        return response.data;
    } catch (error) {
        console.error('Error al obtener evento:', error);
        throw error;
    }
}
  async crearEvento(evento: any): Promise<any> {
    try {
      const response = await axios.post('http://localhost:3000/eventos', evento);
      return response.data;
    } catch (error) {
      console.error('Error al crear evento:', error);
      throw error;
    }
  }
  async actualizarEvento(id: number, evento: any): Promise<void> {
    try {
        await axios.put(`http://localhost:3000/eventos/${id}`, evento);
        console.log('Evento enviado al backend:', evento);
    } catch (error) {
        console.error('Error al enviar evento:', error);
        throw error;
    }
}
    async eliminarEvento(id: number): Promise<any> {
    try {
      const response = await axios.delete(`${this.apiUrl}/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar evento:', error);
      throw error;
    }
  }
  async obtenerTodosLosEventos(): Promise<any[]> {
    try {
        const response = await axios.get('http://localhost:3000/eventos'); 
        return response.data;
    } catch (error) {
        console.error('Error al obtener todos los eventos:', error);
        throw error;
    }
}
}


