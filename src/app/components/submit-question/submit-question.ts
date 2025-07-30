import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, Option } from '../../data/dd';

@Component({
  selector: 'app-submit-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './submit-question.html',
  styleUrls: ['./submit-question.css'],
})
export class SubmitQuestionComponent {
  @Input() question!: Question;
  @Input() selectedOptionId: number | null = null;

  getSelectedOption(): Option | undefined {
    return this.question.options.find(option => option.id === this.selectedOptionId);
  }

  getCorrectAnswer(): Option | undefined {
    return this.question.options.find(option => option.isAnswer);
  }

  isCorrect(): boolean {
    const selected = this.getSelectedOption();
    const correct = this.getCorrectAnswer();
    return selected?.id === correct?.id && selected?.isAnswer === true;
  }
}
