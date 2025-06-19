import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgParticlesModule } from 'ng-particles';
import { loadFull } from 'tsparticles';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgParticlesModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Griffonknox_Portfolio';

  particlesOptions = {
    background: {
      color: { value: '#1e1e2f' }
    },
    fpsLimit: 60,
    particles: {
      number: {
        value: 70,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: '#66fcf1'
      },
      shape: {
        type: 'circle'
      },
      links: {
        enable: true,
        distance: 120,
        color: '#66fcf1',
        opacity: 0.3,
        width: 1
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none',
        outModes: {
          default: 'out'
        },
        trail: {
          enable: false
        }
      },
      opacity: {
        value: 0.4
      },
      size: {
        value: { min: 1, max: 4 }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'grab'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 150,
          line_linked: {
            opacity: 0.5
          }
        }
      }
    },
    detectRetina: true
  } as const;

  async particlesInit(engine: any): Promise<void> {
    await loadFull(engine);
  }

  particlesLoaded(container: any): void {}
}
