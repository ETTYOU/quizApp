import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,QuizComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'quizApp';
}
