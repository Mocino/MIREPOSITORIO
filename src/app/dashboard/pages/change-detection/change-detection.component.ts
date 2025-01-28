import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<app-title [title]="currentFramework()"></app-title>

  <pre>{{frameworkAsSignal()    | json}}</pre>
  <pre>{{frameworkAsPropiedad | json}}</pre>
  `,
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change detection - ${this.frameworkAsSignal().name} `
  );

  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2026,
  })

  public frameworkAsPropiedad ={
    name: 'Angular',
    releaseDate: 2026,
  };

  constructor() {
    setTimeout(() => {
      // this.frameworkAsPropiedad.name = 'Reat';
      this.frameworkAsSignal.update( value => ({
        ...value,
        name: 'react'
      }))
      console.log('hecho');
    }, 3000)
  }
}
