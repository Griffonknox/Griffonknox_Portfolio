import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgParticlesModule } from 'ng-particles';
import { loadFull } from 'tsparticles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgParticlesModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Griffonknox_Portfolio';

  particlesOptions = {
    background: {
      color: { value: '#0d47a1' },
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: '#ffffff',
      },
      shape: {
        type: 'circle',
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: { min: 1, max: 5 },
      },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        onClick: {
          enable: true,
          mode: 'push',
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          quantity: 4,
        },
      },
    },
    detectRetina: true,
  } as const;

  async particlesInit(engine: any): Promise<void> {
    await loadFull(engine);
  }

  particlesLoaded(container: any): void {}
}
