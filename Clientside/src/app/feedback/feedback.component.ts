import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  imports: [CommonModule,FormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  name: string = '';
  email: string = '';
  rating: number = 5;
  comments: string = '';
  submitted: boolean = false;

  submitFeedback() {
    if (this.comments.trim()) {
      this.submitted = true;
    }
  }

  resetForm() {
    this.name = '';
    this.email = '';
    this.rating = 5;
    this.comments = '';
    this.submitted = false;
  }

}
