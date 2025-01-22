import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A'|'B'|'C';

@Component({
  standalone: true,
  imports: [CommonModule],
  styles: ``,
  templateUrl: './control-flow.component.html',
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal(['Angular', 'Vue', 'React']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update(value => !value);
  }
}
