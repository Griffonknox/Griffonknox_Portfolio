import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  resumeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.setResumeUrl();
  }

  setResumeUrl() {
    const url = './images/ScottResume2025.pdf';
    this.resumeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
