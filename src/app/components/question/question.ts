import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question, Option } from '../../data/dd';
import { OptionComponent } from '../option/option';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule, OptionComponent],
  templateUrl: './question.html',
  styleUrls: ['./question.css'],
})
export class QuestionComponent implements OnChanges {
  @Input() question!: Question;
  @Input() selectedOptionId: number | null = null;
  @Output() optionSelected = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['question']) {
      // Reset selected option when question changes
      // This is handled by the parent component (QuizComponent) now
    }
  }

  onOptionClick(optionId: number) {
    this.optionSelected.emit(optionId);
  }

  isSelected(optionId: number): boolean {
    return this.selectedOptionId === optionId;
  }
}