import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,       // ✅ required
  imports: [CommonModule], 
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  selectedResume: 'fullstack' | 'backend' = 'fullstack';
  resumeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.setResumeUrl();
  }

  toggleResume() {
    this.selectedResume = this.selectedResume === 'fullstack' ? 'backend' : 'fullstack';
    this.setResumeUrl();
  }

  setResumeUrl() {
    const url =
      this.selectedResume === 'fullstack'
        ? './images/ScottResumeFullStack.pdf'
        : './images/ScottResumeBackEnd.pdf';
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
