import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { SkateboardingComponent } from './pages/skateboarding/skateboarding.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'skateboarding', component: SkateboardingComponent },
  { path: '**', redirectTo: '' },
];
