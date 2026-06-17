import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  template: `
    <main class="login-page">
      <section>
        <h1>Biblio</h1>
        <p>Inicio de sesion pendiente de integrar con Spring Boot.</p>
      </section>
    </main>
  `,
  styles: [`
    .login-page {
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 2rem;
      background: var(--color-surface);
    }

    section {
      width: min(28rem, 100%);
      padding: 2rem;
      border-radius: 0.75rem;
      background: var(--color-surface-lowest);
    }
  `]
})
export class LoginComponent {}
