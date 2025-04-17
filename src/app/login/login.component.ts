import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  standalone: true,
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}
  Login() {
    if (this.email === 'yandresroav@gmail.com' && this.password === '30431790Yr') {
      alert('Inicio de sesión exitoso');
      this.router.navigate(['/listado']);
    } else {
      alert('Credenciales inválidas');
    }
  }
}





