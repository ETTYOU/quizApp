import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Option } from '../../data/dd';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './option.html',
  styleUrls: ['./option.css'],
})
export class OptionComponent {
  @Input() option!: Option;
  @Input() isSelected: boolean = false;
}