import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.html',
  styleUrls: ['./pagination.css'],
})
export class PaginationComponent {
  @Input() totalQuestions: number = 0;
  @Input() currentIndex: number = 0;
  @Output() goTo = new EventEmitter<number>();
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalQuestions }, (_, i) => i);
  }

  onGoTo(index: number) {
    this.goTo.emit(index);
  }

  onNext() {
    this.next.emit();
  }

  onPrev() {
    this.prev.emit();
  }
}