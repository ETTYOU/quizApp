import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, Option, QUIZ_DATA } from '../../data/dd';
import { QuestionComponent } from '../question/question';
import { PaginationComponent } from '../pagination/pagination';
import { SubmitQuestionComponent } from '../submit-question/submit-question'; // New import

type QuizMode = 'quiz' | 'review' | 'submit';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, QuestionComponent, PaginationComponent, SubmitQuestionComponent],
  templateUrl: './quiz.html',
  styleUrls: ['./quiz.css'],
})
export class QuizComponent {
  questions: Question[] = QUIZ_DATA.questions;
  currentQuestionIndex: number = 0;
  selectedAnswers: { [key: number]: number } = {}; // Stores questionId: optionId
  quizMode: QuizMode = 'quiz'; // Initial mode

  get currentQuestion(): Question {
    return this.questions[this.currentQuestionIndex];
  }

  get progress(): number {
    return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
  }

  onOptionSelected(optionId: number) {
    this.selectedAnswers[this.currentQuestion.id] = optionId;
  }

  goToQuestion(index: number) {
    if (index >= 0 && index < this.questions.length) {
      this.currentQuestionIndex = index;
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  // New methods for mode switching
  showQuiz() {
    this.quizMode = 'quiz';
  }

  showReview() {
    this.quizMode = 'review';
  }

  showSubmit() {
    this.quizMode = 'submit';
  }

  getCorrectAnswer(question: Question): Option | undefined {
    return question.options.find(option => option.isAnswer);
  }

  getSelectedOptionName(question: Question): string {
    const selectedOptionId = this.selectedAnswers[question.id];
    const selectedOption = question.options.find(option => option.id === selectedOptionId);
    return selectedOption ? selectedOption.name : 'Not answered';
  }
}