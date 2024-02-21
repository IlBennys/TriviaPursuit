import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WelcomeServiceService } from '../../services/welcome-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent implements OnInit {
  constructor(
    private welcomeService: WelcomeServiceService,
    private router: Router,
    private http: HttpClient
  ) {}

  title = 'Trivial Pursuit';

  categories: any[] = [];

  homeForm: FormGroup;

  ngOnInit(): void {
    this.homeForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      difficulty: new FormControl(null, Validators.required),
      favoriteCategory: new FormControl(null, Validators.required),
    });

    this.welcomeService.getCategory().subscribe((data: any) => {
      this.categories = data.trivia_categories;
    });
  }

  onSubmit(): void {
    if (this.homeForm.valid) {
      const difficulty = this.homeForm.get('difficulty')!.value;
      const favoriteCategory = this.homeForm.get('favoriteCategory')!.value;
      const apiUrl = `https://opentdb.com/api.php?amount=10&category=${favoriteCategory}&difficulty=${difficulty}&type=multiple`;
      this.http.get(apiUrl).subscribe((data: any) => {
        localStorage.setItem('questions', JSON.stringify(data.results));
        this.router.navigate(['/domande']);
      });
    }
  }
}
