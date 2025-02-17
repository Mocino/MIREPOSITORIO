import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  styles: ``,
  templateUrl: './defer-options.component.html',
})
export default class DeferOptionsComponent {

}
