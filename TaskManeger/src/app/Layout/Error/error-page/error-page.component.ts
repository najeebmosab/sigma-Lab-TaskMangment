import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  constructor(private router: Router) {}
  countdown: number = 5; // Set the initial countdown time in seconds
  private countdownInterval: any; // Variable to store the interval reference

  ngOnInit(): void {
    // Redirect to tasks page after 5 seconds
    this.startCountdown();
  }
  private startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      this.countdown--; // Decrement the countdown timer
      if (this.countdown <= 0) {
        this.router.navigate(['/tasks']); // Redirect to tasks page when the countdown reaches 0
        clearInterval(this.countdownInterval); // Clear the interval when the countdown is done
      }
    }, 1000); // Repeat the interval every 1 second (1000 milliseconds)
  }
}
