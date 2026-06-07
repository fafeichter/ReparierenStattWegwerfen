import { Component, ChangeDetectionStrategy } from '@angular/core';
import { urls } from '../config/urls';

@Component({
  selector: 'app-fabian-github',
  imports: [],
  templateUrl: './fabian-github.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './fabian-github.css',
})
export class FabianGithub {
  readonly urls = urls;
}
