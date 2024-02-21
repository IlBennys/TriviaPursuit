import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrl: './question-page.component.scss',
})
export class QuestionPageComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) {}

  title = 'CHOOSE CORRECT ANSWERS!';
  homeForm: FormGroup;

  correctAnswersCount: number = 0;
  incorrectAnswersCount: number = 0;
  userAnswers: any[] = [];
  questions: any[];

  ngOnInit(): void {
    const storedQuestions = localStorage.getItem('questions');
    if (storedQuestions) {
      this.questions = JSON.parse(storedQuestions);
    } else {
      console.error('Nessuna domanda trovata nel localStorage.');
    }
  }

  checkAnswer(question: any, answer: string) {
    if (answer === question.correct_answer) {
      this.correctAnswersCount++;
    } else {
      this.incorrectAnswersCount++;
    }
  }

  openDialog() {
    this.dialog.open(DialogElementsExampleDialogComponent, {
      data: {
        totalAnswers: this.correctAnswersCount - this.incorrectAnswersCount,
      },
    });
  }
}
