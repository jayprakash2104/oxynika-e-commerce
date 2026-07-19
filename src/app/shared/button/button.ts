import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button {

  config = input.required<any>();

}
